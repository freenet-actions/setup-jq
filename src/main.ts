import * as core from '@actions/core'
import {AppInstaller} from './app-installer'

async function run(): Promise<void> {
  try {
    const version: string = core.getInput('version')
    core.debug('version ${version} ')
    const installer = new AppInstaller()
    await installer.install(version)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
