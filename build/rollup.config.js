import commonjs from '@rollup/plugin-commonjs';
import buble from '@rollup/plugin-buble';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import analyze from 'rollup-plugin-analyzer';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { isProduction } from '../src/utils';

export default {
  input: 'src/v-aos/index.js',
  output: {
    name: 'VAos',
    exports: 'named',
    sourcemap: true,
    globals: { 'lodash/kebabCase': '_kebabCase'   },
  },
  plugins: [
    peerDepsExternal(),
    commonjs(),
    buble({ objectAssign: true, exclude: ['node_modules/**'] }),
    nodeResolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
    }),
    postcss({ minimize: true }),
    isProduction() && terser(),
    isProduction() && analyze(),
  ],
};
