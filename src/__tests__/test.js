import ava from 'ava';
import equal from 'assert-dir-equal';
import remark from '..';
import rmBadges from 'remark-strip-badges';
import rmParas from 'remark-squeeze-paragraphs';
import metalsmith from 'metalsmith';

ava('should convert markdown files', t => {
    return new Promise(resolve => {
        metalsmith('fixtures')
            .use(remark([ rmBadges, rmParas ]))
            .build(err => {
                t.falsy(err, 'should not error');
                t.notThrows(() => equal('fixtures/build', 'fixtures/expected'));
                resolve();
            });
    });
});
