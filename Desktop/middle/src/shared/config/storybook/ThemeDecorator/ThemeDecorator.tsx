import 'app/styles/index.scss';
import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export function ThemeDecorator(theme: Theme) {
    return function anynimusFunction(StoryComponent: Story) {
        return (
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        );
    };
}