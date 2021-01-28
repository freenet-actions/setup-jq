import * as core from '@actions/core'
import * as installer from './app-installer'

async function run(): Promise<void> {
  try {
    const version: string = core.getInput('version')
    core.debug('version ${version} ')
    await installer.install(version)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
