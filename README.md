# postsass
> Cli compiler for sass/scss via dart-sass and postcss.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

![snapshot](https://tva1.sinaimg.cn/large/0081Kckwgy1gk87ynhkbaj30u60asasp.jpg)

## installation
```shell
# public
npm i -g @jswork/postsass

# private
git clone https://github.com/afeiship/postsass.git
cd postsass
npm i && npm link
```

## usage
~~~
Usage: postsass [options]

Options:
  -V, --version       output the version number
  -s, --src <string>  Sass/scss file path.
  -d, --dst <string>  Css file path.
  -c, --copy          Copy original src to dst.
  -m, --minify        Minify css.
  -h, --help          display help for command
~~~

## license
Code released under [the MIT license](https://github.com/afeiship/postsass/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/postsass
[version-url]: https://npmjs.org/package/@jswork/postsass

[license-image]: https://img.shields.io/npm/l/@jswork/postsass
[license-url]: https://github.com/afeiship/postsass/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/postsass
[size-url]: https://github.com/afeiship/postsass/blob/master/dist/postsass.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/postsass
[download-url]: https://www.npmjs.com/package/@jswork/postsass
