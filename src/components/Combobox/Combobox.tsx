import {
    LegacyRef,
    ReactElement,
    RefObject,
    useCallback,
    useMemo,
    useRef,
    useState,
} from 'react'
import {
    Flex,
    List,
    ListItem,
    Text,
    useColorModeValue,
    useDisclosure,
    useOutsideClick,
    VStack,
} from '@chakra-ui/react'
import { ChevronDown } from '../Icons'

type ComboboxOptionType = {
    id: string
    name: string
}
type ComboboxProps<Option> = {
    placeholder: string
    options: Option[]
    onSelect: (option: Option) => void
}

export function Combobox<OptionType extends ComboboxOptionType>({
    placeholder,
    options,
    onSelect,
}: ComboboxProps<OptionType>): ReactElement {
    const [label, setLabel] = useState<string>()
    const ref = useRef() as RefObject<HTMLDivElement>
    const { isOpen, onClose, onToggle } = useDisclosure()
    const borderColor = useColorModeValue('lightGray', 'darkGray')
    const listBackgroundColor = useColorModeValue('white', 'lightBlack')
    const listItemHoverBackgroundColor = useColorModeValue('whiteSoft', 'black')

    const handleOnSelect = useCallback(
        (option: OptionType) => {
            onSelect(option)
            setLabel(option.name)
            onClose()
        },
        [onSelect, onClose],
    )

    useOutsideClick({
        ref: ref,
        handler: onClose,
    })

    return (
        <VStack ref={ref} gap={1} alignItems={''} width={'full'}>
            <Flex
                rounded={'md'}
                px={4}
                py={3.5}
                justifyContent={'space-between'}
                alignItems={'center'}
                borderWidth={'thin'}
                _hover={{
                    cursor: 'pointer',
                }}
                onClick={onToggle}
                borderColor={isOpen ? 'purple' : borderColor}>
                {label || placeholder}
                <ChevronDown color={'purple'} />
            </Flex>
            {isOpen && (
                <List backgroundColor={listBackgroundColor} rounded={'md'}>
                    {options.map((option) => (
                        <ListItem
                            _first={{
                                borderTopRadius: 'md',
                            }}
                            _last={{
                                borderBottomRadius: 'md',
                            }}
                            overflow={'hidden'}
                            key={option.id}
                            p={4}
                            onClick={() => handleOnSelect(option)}
                            cursor={'pointer'}
                            _hover={{
                                bg: listItemHoverBackgroundColor,
                            }}>
                            {option.name}
                        </ListItem>
                    ))}
                </List>
            )}
        </VStack>
    )
}
