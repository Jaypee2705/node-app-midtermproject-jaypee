const fs = require('fs')

const write = function(cmd="[]") {
    fs.writeFileSync('note.txt', cmd)
}

module.exports = write