const io = require('@actions/io')
const path = require('path')
module.exports = async () => {
  console.log('setup test')
  const toolDir = path.join(__dirname, 'runner', 'tools')
  const tempDir = path.join(__dirname, 'runner', 'temp')

  process.env['RUNNER_TOOL_CACHE'] = toolDir

  process.env['RUNNER_TEMP'] = tempDir
  
  console.log(`clear tooldir:${toolDir} and tempDir: ${tempDir}`)

  await io.rmRF(toolDir)
  await io.rmRF(tempDir)
}
