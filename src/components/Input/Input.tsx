import {
    chakra,
    Text,
    InputProps as ChakraInputProps,
    Input as ChakraInput,
    useColorModeValue,
} from '@chakra-ui/react'
import { FC } from 'react'

type InputProps = ChakraInputProps & {
    label: string
    error?: string
}

export const Input: FC<InputProps> = ({ label, error, ...rest }) => {
    const labelTextColor = useColorModeValue('gray', 'white')

    return (
        <chakra.label htmlFor={rest.id} width={'full'} position={'relative'}>
            <Text py={1} fontWeight={'600'} color={labelTextColor}>
                {label}
            </Text>
            {error && (
                <Text
                    position={'absolute'}
                    color={'red'}
                    right={4}
                    maxWidth={'50%'}
                    overflow={'hidden'}
                    textOverflow={'ellipsis'}
                    whiteSpace={'nowrap'}
                    top={'calc(50% + 0.3rem)'}>
                    {error}
                </Text>
            )}
            <ChakraInput
                {...rest}
                _placeholder={{ color: 'lightGrayAlpha25' }}
                borderColor={error ? 'red' : 'lightGrayAlpha25'}
                _focus={{
                    borderColor: error ? 'red' : 'lightGrayAlpha25',
                    boxShadow: 'none',
                }}
                h={12}
            />
        </chakra.label>
    )
}
