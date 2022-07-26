import { FC } from 'react'
import { Button, VStack } from '@chakra-ui/react'

export const App: FC = () => (
    <VStack alignItems="flex-start">
        <Button size="lg">Button Primary (L)</Button>
        <Button>Button Primary (S)</Button>
        <Button variant="secondary">Button Secondary</Button>
        <Button variant="destructive">Button Destructive</Button>
    </VStack>
)
