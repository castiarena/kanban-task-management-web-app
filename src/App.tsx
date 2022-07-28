import { FC } from 'react'
import { Button, Container, Heading, VStack } from '@chakra-ui/react'
import { Checkbox, Combobox, Input } from './components'

export const App: FC = () => (
    <Container maxW="container.md">
        <VStack alignItems="flex-start" gap={5}>
            <Heading>Components for the challenge</Heading>
            <Button size="lg">Button Primary (L)</Button>
            <Button>Button Primary (S)</Button>
            <Button variant="secondary">Button Secondary</Button>
            <Button variant="destructive">Button Destructive</Button>

            <Checkbox>Some</Checkbox>
            <Input label={'Text field'} placeholder={'Enter task name'} />
            <Input
                error={'Can’t be empty'}
                label={'Text field'}
                placeholder={'Enter task name'}
            />
            <Combobox
                placeholder={'some'}
                options={[
                    { id: '123', name: 'option 1' },
                    { id: '144', name: 'option 2' },
                    { id: '424', name: 'option 3' },
                ]}
                onSelect={({ id }) => console.log(id)}
            />
        </VStack>
    </Container>
)
