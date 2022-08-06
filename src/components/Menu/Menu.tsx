import { FC } from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
import { KanbanLogo } from '../Icons'

export const Menu: FC = () => {
    const menuBgColor = useColorModeValue('white', 'darkGray')
    const borderColor = useColorModeValue('lightGray', 'lightGrayAlpha25')

    return (
        <Box
            bg={menuBgColor}
            borderRightWidth={'thin'}
            borderRightColor={borderColor}
            position={'sticky'}
            top={0}
            display={'flex'}
            h={'full'}
            alignItems={'flex-start'}
            justifyContent={'space-between'}
            flexDirection={'column'}>
            <Box px={12} py={8}>
                <KanbanLogo width={153} height={26} />
            </Box>

            <Box>bottom</Box>
        </Box>
    )
}
