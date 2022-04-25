import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import CardBox from '../../components/Card/Card';
import HeroSection from '../../components/HeroSection/HeroSection';
import Layout from '../Layout/Layout';

const Dashboard = () => {
    return (
        <Layout>
            <Box>
                <HeroSection />
                <Grid container spacing={2} sx={{ flexDirection: { xs: 'column', sm: 'column', md: 'row' } }}>
                    <Grid item xs={4} sx={{ maxWidth: { xs: '100%' } }}>
                        <CardBox amount="1000" progress_policy={50} progress_claim={20} />
                    </Grid>
                    <Grid item xs={4} sx={{ maxWidth: { xs: '100%' } }}>
                        <CardBox amount="2500" progress_policy={70} progress_claim={60} />
                    </Grid>
                    <Grid item xs={4} sx={{ maxWidth: { xs: '100%' } }}>
                        <CardBox amount="2500" progress_policy={70} progress_claim={60} />
                    </Grid>
                </Grid>
            </Box>
        </Layout>
    );
};

export default Dashboard;
