const io = require('@actions/io')

module.exports = async () => {
  const toolDir = process.env['RUNNER_TOOL_CACHE']
  await io.rmRF(toolDir)
};
