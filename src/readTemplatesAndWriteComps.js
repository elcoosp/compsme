const { format, composeP, get, getFileName } = require('./utils'),
  config = require('cosmiconfig')('compsme'),
  { readFiles } = require('node-dir'),
  write = require('write'),
  path = require('path')

const readTemplatesAndWriteComps = async comps => {
  //Get the directories path to container and components
  const directories = await composeP(get`config`)(config.load())
  //  Iterate over the kinds of components and read corresponding template dirs
  for (const type in comps) {
    readFiles(
      path.resolve(__dirname, `templates/${type}`),
      (err, content, filePath, next) => {
        // For all requested component of a type write the corresponding files
        // in the project path retrieved from the rc config (config.loader)
        // With content varaibles replaced by compName
        if (err) throw err
        comps[type].forEach(compName =>
          write(
            `${directories[type]}/${compName}/${getFileName(filePath)}`,
            content.replace(/@NAME/g, compName)
          )
        )
        next()
      }
    )
  }
}

module.exports = readTemplatesAndWriteComps
