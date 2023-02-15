import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferRelative: true,
        modules: [options.paths.srs, 'node_modules'],
        mainFiles: ['index'],
        alias: {},
    };
}
