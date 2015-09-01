'use strict';

var mdast = require('mdast'),
    html = require('mdast-html'),
    extname = require('path').extname;

function plugin (plugins) {
    return function (files, metalsmith) {
        Object.keys(files).map(function (file) {
            var extension = extname(file);
            if (extension !== '.md' && extension !== '.markdown') {
                return true;
            }
            var markdown = String(files[file].contents);
            var result = mdast.use(plugins).use(html).process(markdown);
            files[file].contents = new Buffer(result);
            var data = files[file];
            delete files[file];
            files[file.replace(extension, '.html')] = data;
        });
    }
}

/**
 * Expose `plugin`.
 */

module.exports = plugin;
