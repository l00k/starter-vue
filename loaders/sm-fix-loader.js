const fs = require('fs')

module.exports = function loader(source, sourceMap, meta) {
    if(typeof sourceMap != 'undefined' && sourceMap)
    {
        sourceMap.file = this.resourcePath

        if(typeof sourceMap.sourceRoot != 'undefined')
        {
            for(let i in sourceMap.sources)
            {
                sourceMap.sources[i] = sourceMap.sourceRoot + '/' + sourceMap.sources[i]
            }
            delete sourceMap.sourceRoot
        }

        // read content and serialize
        var sourceData = fs.readFileSync(this.resourcePath, { encoding: 'utf-8' })
        sourceMap.sourcesContent[0] = sourceData
    }
    
    this.callback(null, source, sourceMap, meta)
    return
}
