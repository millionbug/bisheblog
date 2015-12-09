var fs = require("fs");
var zlib = require("zlib");
fs.createReadStream("Stream.js")
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream("fuck.js.gz"));
