import webpack from 'webpack';
import path from 'path';
import { buildPlugins } from '../build/buildPlagins';
import { buildLoaders } from '../build/buildLoaders';
import { buildResolvers } from '../build/buildResolvers';
import { BuildOptions } from "./types/config";
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { mode, paths, isDev } = options;
    return {
        mode: mode,
        entry: options.paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}