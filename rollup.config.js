import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

const packageJson = require('./package.json');

const rollupConfig = [
  {
    input: 'src/index.ts',
    output: {
      // file: packageJson.module,
      dir: 'lib',
      format: 'esm',
      sourcemap: true,
      exports: 'named',
    },
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        declarationDir: 'lib',
        declaration: true,
        exclude: ['**/*.stories.tsx', 'node_modules'],
      }),
      postcss({
        extensions: ['.css'],
        minimize: true,
        extract: true,
        config: {
          path: './postcss.config.js',
        },
      }),
      terser(),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'lib/index.d.ts', format: 'es' }],
    plugins: [dts.default()],
    external: [/\.css$/],
  },
];
export default rollupConfig;
