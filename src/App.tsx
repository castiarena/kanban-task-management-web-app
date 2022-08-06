import { FC } from 'react'
import { Button, Heading, Text, VStack } from '@chakra-ui/react'
import { Layout } from './components'

export const App: FC = () => (
    <Layout>
        <VStack
            alignItems="center"
            gap={5}
            height={'100%'}
            justifyContent={'center'}>
            <Text color={'gray'} fontWeight={'bold'}>
                This board is empty. Create a new column to get started.
            </Text>
            <Button>+Add new column</Button>
        </VStack>
    </Layout>
)
