import {Component} from 'react';
import {MantineProvider, ColorSchemeProvider, ColorScheme} from '@mantine/core';
import {useHotkeys, useLocalStorage} from '@mantine/hooks';

const withMantine = (component: Component) => () => {
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: 'light',
    });

    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    useHotkeys([['mod+J', () => toggleColorScheme()]]);
    return (
        <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
        >
            <MantineProvider theme={{colorScheme}} withGlobalStyles>
                {/* @ts-ignore */}
                {component()}
            </MantineProvider>
        </ColorSchemeProvider>
    );
};
export default withMantine;
