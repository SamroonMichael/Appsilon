import { useState } from 'react';
import { Link } from 'react-router-dom';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import PolicyOutlinedIcon from '@mui/icons-material/PolicyOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Button, Typography, Box, Drawer } from '@mui/material';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import Profile from '../Profile/Profile';

const drawerWidthOpen = 240;
const paddingIconButton = 10;
const marginIconButton = 14;
const iconFontSize = 20;
const drawerWidthClose = (paddingIconButton + marginIconButton) * 2 + iconFontSize;

export const drawerContent = (
    <>
        {/* <Button
                onClick={handleDrawerOpen}
                sx={{
                    minWidth: 'initial',
                    padding: '10px',
                    color: 'gray',
                    borderRadius: '8px',
                    backgroundColor: open ? 'transparent' : 'transparent',
                    '&:hover': {
                        backgroundColor: '#26284687',
                    },
                }}
            >
                <MenuIcon sx={{ fontSize: '20px', color: open ? 'lightgray' : 'lightGray' }}></MenuIcon>
            </Button> */}
        <List dense={true}>
            <Link to="/overview">
                <ListItem button>
                    <ListItemIcon>
                        <Badge>
                            <GridViewOutlinedIcon />
                        </Badge>
                    </ListItemIcon>
                    <Typography variant="body1">Overview</Typography>
                </ListItem>
            </Link>
            <Link to="/policy">
                <ListItem button>
                    <ListItemIcon>
                        <PolicyOutlinedIcon />
                    </ListItemIcon>
                    <Typography variant="body1">Policy</Typography>
                </ListItem>
            </Link>
            <Link to="/reports">
                <ListItem button>
                    <ListItemIcon>
                        <BugReportOutlinedIcon />
                    </ListItemIcon>
                    <Typography variant="body1">Reports</Typography>
                </ListItem>
            </Link>
            <Link to="/company">
                <ListItem button>
                    <ListItemIcon>
                        <BusinessOutlinedIcon />
                    </ListItemIcon>
                    <Typography variant="body1">Company</Typography>
                </ListItem>
            </Link>
            <Link to="/users">
                <ListItem button>
                    <ListItemIcon>
                        <AccountCircleOutlinedIcon />
                    </ListItemIcon>
                    <Typography variant="body1">User Account</Typography>
                </ListItem>
            </Link>
            <Link to="/history">
                <ListItem button>
                    <ListItemIcon>
                        <ArticleOutlinedIcon />
                    </ListItemIcon>
                    <Typography variant="body1">History</Typography>
                </ListItem>
            </Link>
        </List>
    </>
);

const Navigation = () => {
    const theme = useTheme();
    const [open, setOpen] = useState<boolean>(false);

    const handleDrawerOpen = () => {
        setOpen(!open);
    };

    return (
        <Box>
            {/* <Drawer
                variant="permanent"
                open={open}
                sx={{
                    width: open ? { xs: '0px', sm: drawerWidthClose } : { xs: drawerWidthClose, sm: drawerWidthOpen },
                    transition: theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: open
                            ? theme.transitions.duration.leavingScreen
                            : theme.transitions.duration.enteringScreen,
                    }),
                    '& .MuiDrawer-paper': {
                        // justifyContent: 'space-between',
                        overflowX: 'hidden',
                        width: open
                            ? { xs: '0px', sm: drawerWidthClose }
                            : { xs: drawerWidthClose, sm: drawerWidthOpen },
                        borderRight: '0px',
                        transition: theme.transitions.create('width', {
                            easing: theme.transitions.easing.sharp,
                            duration: open
                                ? theme.transitions.duration.leavingScreen
                                : theme.transitions.duration.enteringScreen,
                        }),
                    },
                }}
            ></Drawer> */}
            {drawerContent}
        </Box>
    );
};

export default Navigation;
