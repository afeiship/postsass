import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import copy from 'rollup-plugin-copy';
import scss from 'rollup-plugin-scss';

import pkg from './package.json';

export default [
  {
    input: 'src/components/style.scss',
    plugins: [
      scss({ output: 'dist/style.css' }),
      copy({
        targets: [{ src: 'src/components/style.scss', dest: 'dist' }]
      })
    ]
  },
  {
    input: 'src/main.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: true
      },
      {
        file: pkg.module,
        format: 'es',
        exports: 'named',
        sourcemap: true
      }
    ],
    plugins: [
      external(),
      resolve(),
      typescript({
        rollupCommonJSResolveHack: true,
        exclude: '**/__tests__/**',
        clean: true
      }),
      commonjs({
        include: ['node_modules/**'],
        namedExports: {
          'node_modules/react/react.js': ['Children', 'Component', 'PropTypes', 'createElement'],
          'node_modules/react-dom/index.js': ['render']
        }
      })
    ]
  }
];
