import { createTheme } from '@mui/material/styles';

const Colors = {
    primary: '#713BDB',
    text_primary: '#42474A',
    icon_color: '#A2A4B9',
};

export const theme = createTheme({
    components: {
        // Name of the component
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: Colors.icon_color,
                    marginRight: '0.6rem',
                },
            },
        },
    },
    palette: {
        primary: {
            main: Colors.primary,
        },
    },
    typography: {
        fontFamily: ['Segoe UI', 'Roboto', 'sans-serif'].join(','),
        fontSize: 16,
        body1: {
            color: Colors.text_primary,
        },
    },
});
