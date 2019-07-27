const fs = require('fs')

let idx = 0

module.exports = function loader(source, sourceMap, meta) {
    ++idx
    
    var data = ''
    data += '// ' + this.resourcePath + "\n"
    data += '// ' + this.resourceQuery + "\n"
    data += "// ############\n"
    data += source
    data += "\n// ############\n"
    data += JSON.stringify(sourceMap, undefined, 4)
    data += "\n// ############\n"
    data += JSON.stringify(meta)

    var filename = 'loaders/dump/__' + idx + '-' + this.resourcePath.replace(this.rootContext + '/', '').split('/').join('-')
    fs.writeFileSync(filename, data)
    
    this.callback(null, source, sourceMap, meta)
    return
}
