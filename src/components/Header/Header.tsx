import { FC } from 'react'
import {
    Button,
    Flex,
    Heading,
    HStack,
    useColorModeValue,
} from '@chakra-ui/react'

export const Header: FC = () => {
    const borderColor = useColorModeValue('lightGray', 'lightGrayAlpha25')
    const backgroundColor = useColorModeValue('white', 'darkerGray')

    return (
        <Flex
            width={'full'}
            bg={backgroundColor}
            borderBottomColor={borderColor}
            borderBottomWidth={'thin'}
            alignItems={'center'}
            height={97}>
            <HStack justifyContent={'space-between'} px={8} w={'full'}>
                <Heading as={'h2'} size={'md'}>
                    Platform Launch
                </Heading>
                <Button disabled>+ Add New Task</Button>
            </HStack>
        </Flex>
    )
}
