import remark from 'remark';
import html from 'remark-html';
import {extname} from 'path';

export default function metalsmithRemark (plugins) {
    return function (files) {
        Object.keys(files).map(file => {
            const extension = extname(file);
            if (extension !== '.md' && extension !== '.markdown') {
                return true;
            }
            const markdown = String(files[file].contents);
            const result = remark().use(plugins).use(html).process(markdown);
            files[file].contents = new Buffer(result.contents);
            const data = files[file];
            delete files[file];
            files[file.replace(extension, '.html')] = data;
        });
    };
}
