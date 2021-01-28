const io = require('@actions/io')

module.exports = async () => {
  const toolDir = process.env['RUNNER_TOOL_CACHE']
  const tempDir = process.env['RUNNER_TEMP']
  console.log('tear down')
  await io.rmRF(toolDir)
};
