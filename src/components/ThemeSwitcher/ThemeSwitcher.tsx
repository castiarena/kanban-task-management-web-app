import { FC } from 'react'
import {
    Stack,
    chakra,
    useDisclosure,
    useColorMode,
    HStack,
    useColorModeValue,
} from '@chakra-ui/react'
import { Moon, Sun } from '../Icons'

type SwitchProps = {
    onChange: (state: boolean) => void
}

const Switch: FC<SwitchProps> = ({ onChange }) => {
    const { isOpen, onToggle } = useDisclosure()
    const handleOnClick = () => {
        onToggle()
        setTimeout(() => onChange(isOpen), 200)
    }

    return (
        <Stack
            onClick={handleOnClick}
            width={10}
            rounded={'full'}
            backgroundColor={'purple'}
            p={'3px'}
            height={5}>
            <chakra.span
                transition={'all 200ms ease-in'}
                ml={isOpen ? 0 : 'calc(100% - 14px)'}
                rounded={'full'}
                display={'block'}
                width={3.5}
                backgroundColor={'white'}
                height={3.5}
            />
        </Stack>
    )
}

export const ThemeSwitcher: FC = () => {
    const { toggleColorMode } = useColorMode()
    const background = useColorModeValue('lighterGray', 'lightBlack')
    return (
        <HStack
            width={'full'}
            p={3}
            gap={2}
            bg={background}
            rounded={8}
            alignItems={'center'}
            justifyContent={'center'}>
            <Sun color={'gray'} boxSize={5} />
            <Switch onChange={toggleColorMode} />
            <Moon color={'gray'} boxSize={4} />
        </HStack>
    )
}
