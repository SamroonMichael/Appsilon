import { Box } from '@mui/material';
import heroBanner from '../../img/hero-banner.png';

const HeroSection = () => {
    return (
        <Box>
            <img src={heroBanner} alt="banner-img" />
        </Box>
    );
};

export default HeroSection;
