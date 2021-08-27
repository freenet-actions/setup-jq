import * as core from '@actions/core'
import * as tc from '@actions/tool-cache'
import * as fs from 'fs'
import * as os from 'os'
import * as path from 'path'

export async function install(version: string): Promise<void> {
  const toolName = 'jq'

  const url = getDownloadUrl(version, toolName)

  console.log(`install app called version : ${version} url : ${url}`)

  const appPath = await getBinary(toolName, version, url)

  console.log(`${toolName} has been cached at ${appPath}`)

  core.addPath(path.dirname(appPath))
}

function getDownloadUrl(version: string, tool: string): string {
  const appname = getAppName(tool)
  return `https://github.com/stedolan/jq/releases/download/jq-${version}/${appname}`
}

function getAppName(tool: string): string {
  let appname: string | null = null
  switch (os.platform()) {
    case 'linux':
      switch (os.arch()) {
        case 'x64':
          appname = `${tool}-linux64`
          break
      }
      break
    case 'darwin':
      switch (os.arch()) {
        case 'x64':
          appname = `${tool}-osx-amd64`
          break
      }
      break
    case 'win32':
      switch (os.arch()) {
        case 'x64':
          appname = `${tool}-win64.exe`
          break
      }
      break
  }
  if (!appname) {
    throw `Unsupported platform. platform:${os.platform()}, arch:${os.arch()}`
  }
  return appname
}

async function getBinary(
  toolName: string,
  version: string,
  url: string
): Promise<string> {
  let cachedToolpath: string
  cachedToolpath = tc.find(toolName, version)

  if (!cachedToolpath) {
    core.debug(`Downloading ${toolName} from: ${url}`)

    let downloadPath: string | null = null
    try {
      downloadPath = await tc.downloadTool(url)
    } catch (error: any) {
      core.debug(error)
      throw `Failed to download version ${version}: ${error}`
    }

    cachedToolpath = await tc.cacheFile(
      downloadPath,
      toolName + getExecutableExtension(),
      toolName,
      version
    )
  }

  const executablePath = path.join(
    cachedToolpath,
    toolName + getExecutableExtension()
  )

  fs.chmodSync(executablePath, '777')

  return executablePath
}

function getExecutableExtension(): string {
  if (os.type().match(/^Win/)) {
    return '.exe'
  }
  return ''
}
