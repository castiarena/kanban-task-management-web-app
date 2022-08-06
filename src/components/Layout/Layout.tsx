import { FC, ReactElement } from 'react'
import {
    Box,
    Container,
    Grid,
    GridItem,
    useColorModeValue,
} from '@chakra-ui/react'
import { Header } from '../Header'
import { KanbanLogo } from '../Icons'
import { Menu } from '../Menu'

type LayoutProps = {
    children: ReactElement
}

export const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <Grid templateColumns={'300px 1fr'} height={'100vh'}>
            <GridItem>
                <Menu />
            </GridItem>
            <GridItem height={'full'}>
                <Header />
                <Container
                    maxW="container.md"
                    position={'relative'}
                    height={'full'}>
                    {children}
                </Container>
            </GridItem>
        </Grid>
    )
}
