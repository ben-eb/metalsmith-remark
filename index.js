'use strict';

var remark  = require('remark'),
    html    = require('remark-html'),
    extname = require('path').extname;

function plugin (plugins) {
    return function (files) {
        Object.keys(files).map(function (file) {
            var extension = extname(file);
            if (extension !== '.md' && extension !== '.markdown') {
                return true;
            }
            var markdown = String(files[file].contents);
            var result = remark.use(plugins).use(html).process(markdown);
            files[file].contents = new Buffer(result);
            var data = files[file];
            delete files[file];
            files[file.replace(extension, '.html')] = data;
        });
    };
}

/**
 * Expose `plugin`.
 */

module.exports = plugin;
