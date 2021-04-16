import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import analyze from 'rollup-plugin-analyzer';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const input = 'src/v-aos/index.js';
const globals = { 'lodash.kebabcase': '_kebabCase', aos: 'AOS' };

export function isProduction() {
  return process.env.NODE_ENV === 'production';
}

export default [
  {
    input,
    output: {
      name: 'VAos',
      file: pkg.browser,
      format: 'umd',
      sourcemap: true,
    },
    plugins: [
      commonjs(),
      babel({
        babelHelpers: 'bundled',
        exclude: ['node_modules/**'],
      }),
      postcss({ minimize: true }),
      nodeResolve(),
      terser(),
      analyze(),
    ],
  },
  {
    input,
    external: [...Object.keys(pkg.dependencies), 'aos/dist/aos.css'],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [
      peerDepsExternal(),
      babel({
        babelHelpers: 'bundled',
        exclude: ['node_modules/**'],
      }),
    ],
  },
];
