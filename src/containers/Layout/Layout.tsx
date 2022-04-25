import { Container, Grid, Box } from '@mui/material';
import React from 'react';
import SideBar from '../SideBar/SideBar';
import styled from '@emotion/styled';
import Header from '../../components/Header/Header';

interface LayoutProp {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProp) => {
    const LayoutWapper = styled.main`
        width: 100%;
    `;

    return (
        <LayoutWapper>
            <Grid container>
                <Grid item xs={2} sx={{ display: { xs: 'none', sm: 'flex' } }}>
                    <SideBar />
                </Grid>
                <Grid item xs={10} sx={{ display: { xs: 'flex' }, maxWidth: { xs: '100%', sm: '100%', md: '100%' } }}>
                    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Header />
                        <Box sx={{ background: '#F4F5F9', height: '100%' }}>
                            <Box
                                sx={{
                                    margin: { xs: '0', sm: '0', md: '1.5rem 0 0 1.5rem' },
                                    padding: { xs: '1rem' },
                                    width: { xs: '100%', sm: '100%', md: '75%' },
                                }}
                            >
                                {children}
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </LayoutWapper>
    );
};

export default Layout;
