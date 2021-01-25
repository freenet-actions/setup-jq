import * as core from '@actions/core'
import * as os from 'os'
import * as path from 'path'
import {Installer} from './installer'
import {getBinary} from './utils'

const toolName = 'jq'

export class AppInstaller implements Installer {
  async install(version: string): Promise<void> {
    const url = getDownloadUrl(version, toolName)
    console.log(`install app called version : ${version} url : ${url}`)
    const appPath = await getBinary(toolName, version, url)

    console.log(`${toolName} has been cached at ${appPath}`)

    core.addPath(path.dirname(appPath))
  }
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
