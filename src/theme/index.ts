import { extendTheme, ThemeOverride } from '@chakra-ui/react'
import { Button } from './components'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

const components = {
    Button,
}

const colors = {
    black: '#000112',
    gray: '#828FA3',
    white: '#FFFFFF',
    whiteSoft: '#eff6ff',
    lightGray: '#E4EBFA',
    lightGrayAlpha25: 'rgba(130, 143, 163, .25)',
    lighterGray: '#F4F7FD',
    darkGray: '#3E3F4E',
    darkerGray: '#2B2C37',
    purple: '#635FC7',
    purpleAlpha25: 'rgba(99, 95, 199, .25)',
    lightPurple: '#A8A4FF',
    red: '#EA5555',
    lightRed: '#FF9898',
    lightBlack: '#20212C',
}

const config: ThemeOverride['config'] = {
    initialColorMode: 'light',
    useSystemColorMode: true,
}

const overrideTheme: ThemeOverride = {
    styles: {
        global: (props: StyleFunctionProps) => ({
            body: {
                bg: mode('lighterGray', 'darkerGray')(props),
            },
        }),
    },
    config,
    fonts: {
        heading: `'Plus Jakarta Sans', sans-serif`,
        body: `'Plus Jakarta Sans', sans-serif`,
    },
    colors,
    components,
    semanticTokens: {
        colors: {
            error: 'red',
            text: {
                default: 'red.800',
                _dark: 'gray.50',
            },
        },
    },
}

export const theme = extendTheme(overrideTheme)
