#!/usr/bin/env node
const { Command } = require('commander');
const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const postcssrc = require('postcss-load-config');
const sass = require('sass');
const findup = require('findup-sync');
const { version } = require('../package.json');
// next packages:
require('@jswork/next');

const program = new Command();

program.version(version);

program
  .option('-s, --src <string>', 'Sass/scss file path.')
  .option('-d, --dst <string>', 'Css file path.')
  .option('-c, --copy', 'Copy original src to dst.')
  .option('-a, --is-sass', 'Is sass file.')
  .option('-m, --minify', 'Minify css.')
  .parse(process.argv);

nx.declare({
  statics: {
    init() {
      const app = new this();
      app.start();
    }
  },
  methods: {
    init() {},
    start() {
      const { src, dst, copy, minify, isSass } = program;
      if (!src || !dst) return console.log('src/dst is required!');
      const dstFoloder = path.dirname(dst);
      const srcExt = isSass ? '.sass' : '.scss';
      const distSass = dst.replace(/\.css$/, srcExt);

      if (!fs.existsSync(dstFoloder)) fs.mkdirSync(dstFoloder);

      const outputStyle = minify ? 'compressed' : 'expanded';
      const projectGit = findup('.git');
      const projectRoot = path.dirname(projectGit);
      // add node_modules to loadPaths
      const sassRes = sass.compile(src, {
        outputStyle,
        loadPaths: [path.join(projectRoot, 'node_modules')]
      });

      if (copy) fs.copyFileSync(src, distSass);

      postcssrc().then(({ plugins, options }) => {
        const opts = { from: src, ...options };
        postcss(plugins)
          .process(sassRes.css, opts)
          .then((result) => {
            fs.writeFileSync(dst, result.css);
            if (result.map) {
              fs.writeFileSync(dst + '.map', JSON.stringify(result.map));
            }
          });
      });
    }
  }
});
