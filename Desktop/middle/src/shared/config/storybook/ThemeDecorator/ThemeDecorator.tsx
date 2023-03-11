import 'app/styles/index.scss';
import { Story } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export function ThemeDecorator(theme: Theme) {
    return function anynimusFunction(StoryComponent: Story) {
        return (
            <ThemeProvider initialTheme={theme}>
                <div className={`app ${theme}`}>
                    <StoryComponent />
                </div>
            </ThemeProvider>
        );
    };
}