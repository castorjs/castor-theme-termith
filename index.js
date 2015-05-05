module.exports = {
    "routes": {
        "/exportCSV": "exportCSV.js",
        "/exportXML": "exportXML.js",
        "/exportZIP": "exportZIP.js"
    },
    "loaders" : [
        {
            "script" : "castor-load-xml",
            "pattern" : "**/*.xml"
        },
        {
            "script" : "castor-load-raw",
            "pattern" : "**/*.xml"
        },
        {
            "script" : "tei-format/2014-11-01.js",
            "pattern" : "**/*.xml"
        },
        {
            "script" : "tei-format/2015-02-13.js",
            "pattern" : "**/*.xml"
        },
        {
            "script" : "autoScore.js",
            "pattern" : "**/*.xml"
        }
    ]
};

module.exports.package = pkg = require('./package.json');
