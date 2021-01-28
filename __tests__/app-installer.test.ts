import * as fs from 'fs'
import * as os from 'os'
import * as path from 'path'
import * as installer from '../src/app-installer'

describe('app installer tests', () => {
  it('check the installation', async () => {
    const toolDir = process.env['RUNNER_TOOL_CACHE'] as string
    const version = '1.5'
    await installer.install(version)
    const dir = path.join(toolDir, 'jq', version, os.arch())
    if (process.platform === 'win32') {
      expect(fs.existsSync(path.join(dir, 'jq.exe'))).toBe(true)
    } else {
      expect(fs.existsSync(path.join(dir, 'jq'))).toBe(true)
    }
  })
})
