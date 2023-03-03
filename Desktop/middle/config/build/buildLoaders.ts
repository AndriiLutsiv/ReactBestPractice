import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';

// order of loaders MATTERS, that`s why they are put into vars
export function buildLoaders(options: BuildOptions): RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const cssLoader = buildCssLoader(options.isDev);

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        fileLoader,
        svgLoader,
        typescriptLoader,
        cssLoader,
    ];
}
