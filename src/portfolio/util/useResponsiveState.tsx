import { useMediaQuery, useTheme } from "@mui/material";

type ResponsiveState = {
    at_least: { mobile: boolean, twoCard: boolean, threeCard: boolean, largest: boolean }, 
    at_most: { mobile: boolean, twoCard: boolean, threeCard: boolean, largest: boolean },
}

function useResponsiveState() : ResponsiveState { 

    const theme = useTheme();
    // <Grid size={{ sm: 12, md: 6, lg: 4, xl: 3 }}>

    const largest = useMediaQuery(theme.breakpoints.up('xl'));
    const threeCard = useMediaQuery(theme.breakpoints.up('lg'));
    const twoCard = useMediaQuery(theme.breakpoints.up('md'));


    return {
        at_least: {
            mobile: true,
            twoCard: twoCard,
            threeCard: threeCard,
            largest: largest
        }, 
        at_most: {
            mobile: !twoCard,   
            twoCard: twoCard && !threeCard,
            threeCard: threeCard && !largest,
            largest: largest
        }
    }
}

export default useResponsiveState;