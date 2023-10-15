import { Command } from 'commander';
import { version } from '../package.json';
import fs from 'fs';
import postcss from 'postcss';
import postcssrc from 'postcss-load-config';
import sass from 'sass';

const program = new Command();
program.version(version);

program
  .option('-s, --src <string>', 'Scss/sass file')
  .option('-d, --dst <string>', 'Output css file')
  .option('-m, --minify', 'Minify css')
  .parse(process.argv);

export function cli() {
  const opts = program.opts();
  const { src, dst, minify } = opts;
  if (!src || !dst) return console.log('Please specify src and dst file');

  console.log('src/dst', opts);
  return;

  sass.compile(
    { file: src, outputStyle: minify ? 'compressed' : 'expanded' },
    function (err, result) {
      if (err) return console.log(err);
      postcssrc().then(({ plugins, options }) => {
        postcss(plugins)
          .process(result.css, options)
          .then((res) => console.log(res.css));
      });
    }
  );
}
