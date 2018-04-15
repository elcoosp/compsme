const program = require('commander'),
  splitByType = require('./splitByType'),
  readTemplatesAndWriteComps = require('./readTemplatesAndWriteComps')

const createNewComps = (comp, otherComps) => {
  const comps = splitByType(comp, ...otherComps)
  readTemplatesAndWriteComps(comps)
}

program.command('new <comp> [otherComps...]').action(createNewComps)

program.parse(process.argv)
