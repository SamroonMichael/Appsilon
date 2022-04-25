import Layout from '../Layout/Layout';
import { Box, Grid, Typography } from '@mui/material';
import CardBox from '../../components/Card/Card';
import HeroSection from '../../components/HeroSection/HeroSection';

const Users = () => {
    return (
        <Layout>
            <Box>
                <HeroSection />
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <CardBox amount="3000" progress_policy={50} progress_claim={20} />
                    </Grid>

                    <Grid item xs={4}>
                        <CardBox amount="3500" progress_policy={70} progress_claim={60} />
                    </Grid>
                </Grid>
                <Typography variant="h4">Users Details!</Typography>
            </Box>
        </Layout>
    );
};

export default Users;
