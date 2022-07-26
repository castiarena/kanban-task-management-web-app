import '@fontsource/plus-jakarta-sans/400.css'
import '@fontsource/plus-jakarta-sans/700.css'
import '@fontsource/plus-jakarta-sans/600.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme'

const rootElement = document.getElementById('root')
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(rootElement!).render(
    <StrictMode>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </StrictMode>,
)
