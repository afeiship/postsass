#!/usr/bin/env node
const { Command } = require('commander');
const chalk = require('chalk');
const { readFileSync } = require('fs');
// const postcss = require('postcss');
// const postcssrc = require('postcss-load-config');
// const css = readFileSync('./scss/app.css', 'utf8');

// next packages:
require('@jswork/next');
require('@jswork/next-absolute-package');

const { version } = nx.absolutePackage();
const program = new Command();
const exec = require('child_process').execSync;

program.version(version);

program
  .option('-s, --src <string>', 'Sass/scss file path.')
  .option('-d, --dst <string>', 'Css file path.')
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
      const { src, dst, minify } = program;
      console.log('hello');
      // const css = sass.compileFile(src, {
      //   outputStyle: minify ? 'compressed' : 'expanded'
      // });
      // postcssrc().then(({ plugins, options }) => {
      //   postcss(plugins)
      //     .process(css, options)
      //     .then((result) => console.log(result.css));
      // });
    }
  }
});
