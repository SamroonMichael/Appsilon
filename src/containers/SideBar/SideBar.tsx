import { Button, Typography, Box, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';
import Profile from '../../components/Profile/Profile';
import logo from '../../img/logo.png';
import AddIcon from '@mui/icons-material/Add';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import styled from '@emotion/styled';

const SideBar = () => {
    const SideBarWapper = styled.div`
        width: 100%;
        background: #ffffff;
        box-shadow: 10px 3px 15px rgba(0, 0, 0, 0.05);
        border-radius: 20px 0px 20px 20px;

        .profile-wapper {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 0.9rem;
        }

        .logo-wapper {
            width: 100%;
            height: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.9rem;
            img {
                width: 35px;
            }
        }

        .nav-wapper {
            height: 100vh;
            margin-top: 1rem;
        }

        .logout-wapper {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    `;

    const [name, setName] = useState<string | any>('');

    useEffect(() => {
        if (sessionStorage.getItem('USER_NAME') !== null) {
            const getName = sessionStorage.getItem('USER_NAME');
            setName(getName);
        }
    }, []);

    return (
        <SideBarWapper>
            <>
                <div className="logo-wapper">
                    <img alt="logo" src={logo} />
                    <Link to="/dashboard">
                        <Typography variant="body1" sx={{ fontWeight: 600 }}>
                            Insurance Portal
                        </Typography>
                    </Link>
                </div>
                <div className="profile-wapper">
                    <Profile personName={name} />
                    <Button
                        color="primary"
                        variant="contained"
                        fullWidth
                        sx={{
                            marginTop: '1rem',
                            padding: '0.5rem',
                            width: '70%',
                            borderRadius: '7px',
                            fontSize: '0.8rem',
                            boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.12)',
                        }}
                    >
                        Create New Plan
                        <AddIcon sx={{ fontSize: '0.8rem', color: '#fff', marginRight: 0 }} />
                    </Button>
                </div>
                <div className="nav-wapper">
                    <Navigation />
                </div>
                <div className="logout-wapper">
                    <LogoutOutlinedIcon />
                    <Link to="/">
                        <Typography variant="body1">LogOut</Typography>
                    </Link>
                </div>
            </>
        </SideBarWapper>
    );
};

export default SideBar;
