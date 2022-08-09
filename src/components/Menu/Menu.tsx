import { FC } from 'react'
import { Box, useColorModeValue } from '@chakra-ui/react'
import { KanbanLogo } from '../Icons'
import { ThemeSwitcher } from '../ThemeSwitcher'

export const Menu: FC = () => {
    const menuBgColor = useColorModeValue('white', 'darkerGray')
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

            <Box px={6} py={8} w={'full'}>
                <ThemeSwitcher />
            </Box>
        </Box>
    )
}
