import { FC } from 'react'
import {
    chakra,
    CheckboxProps,
    Flex,
    Text,
    useCheckbox,
    useColorModeValue,
} from '@chakra-ui/react'
import { Check } from '../Icons'

export const Checkbox: FC<CheckboxProps> = ({ children, ...props }) => {
    const { state, getCheckboxProps, getLabelProps, getInputProps, htmlProps } =
        useCheckbox(props)
    const labelBackgroundColor = useColorModeValue('lighterGray', 'lightBlack')
    const textColor = useColorModeValue('black', 'white')
    const checkboxBackgroundColor = useColorModeValue('white', 'darkGray')

    return (
        <chakra.label
            display="flex"
            flexDirection="row"
            alignItems="center"
            gridColumnGap={2}
            bg={labelBackgroundColor}
            rounded="lg"
            px={4}
            py={3}
            cursor="pointer"
            _hover={{
                bg: 'purpleAlpha25',
            }}
            w={'full'}
            {...htmlProps}>
            <input {...getInputProps()} hidden />
            <Flex
                alignItems="center"
                justifyContent="center"
                rounded="sm"
                border="1px solid"
                mr={1}
                borderColor={state.isChecked ? 'purple' : 'lightGrayAlpha25'}
                bg={state.isChecked ? 'purple' : checkboxBackgroundColor}
                w={4}
                h={4}
                {...getCheckboxProps()}>
                {state.isChecked && <Check color={'white'} w={3} h={3} />}
            </Flex>
            <Text
                {...getLabelProps()}
                fontWeight={'600'}
                color={state.isChecked ? 'gray' : textColor}
                textDecoration={state.isChecked ? 'line-through' : 'none'}>
                {children}
            </Text>
        </chakra.label>
    )
}
