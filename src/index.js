import {extname} from 'path';
import remark from 'remark';
import html from 'remark-html';

export default function metalsmithRemark (plugins) {
    return function (files, metal, done) {
        Promise.all(Object.keys(files).map(file => {
            const extension = extname(file);
            if (extension !== '.md' && extension !== '.markdown') {
                return true;
            }
            const markdown = String(files[file].contents);
            return remark().use(plugins).use(html).process(markdown).then(result => {
                files[file].contents = new Buffer(result.contents);
                const data = files[file];
                delete files[file];
                files[file.replace(extension, '.html')] = data;
            });
        })).then(() => done());
    };
}
