import { BuildOptions } from './types/config';
import { ResolveOptions } from "webpack";

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferRelative: true,
        modules: [options.paths.srs, 'node_modules'],
        mainFiles: ['index'],
        alias: {}
    }
}