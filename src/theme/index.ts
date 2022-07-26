import { extendTheme } from '@chakra-ui/react'
import { Button } from './components'

const components = {
    Button,
}

const colors = {
    black: '#000112',
    gray: '#828FA3',
    white: '#FFFFFF',
    lightGray: '#E4EBFA',
    lighterGray: '#F4F7FD',
    darkGray: '#3E3F4E',
    darkerGray: '#2B2C37',
    purple: '#635FC7',
    lightPurple: '#A8A4FF',
    red: '#EA5555',
    lightRed: '#FF9898',
    lightBlack: '#20212C',
}

export const theme = extendTheme({
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
})
