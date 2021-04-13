import commonjs from '@rollup/plugin-commonjs';
import buble from '@rollup/plugin-buble';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import vue from 'rollup-plugin-vue';
import analyze from 'rollup-plugin-analyzer';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import replace from '@rollup/plugin-replace';
import { isProduction } from '../src/utils';

export default {
  input: 'src/v-aos/index.js',
  output: {
    name: 'VAos',
    exports: 'named',
    sourcemap: true,
  },
  plugins: [
    commonjs(),
    buble({ objectAssign: true, exclude: ['node_modules/**'] }),
    nodeResolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
    }),
    postcss({ minimize: true }),
    vue({
      css: true,
      template: {
        isProduction: true,
      },
    }),
    isProduction() && terser(),
    isProduction() && analyze(),
  ],
};
