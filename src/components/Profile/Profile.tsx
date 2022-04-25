import { Box } from '@mui/system';
import Paper from '@mui/material/Paper';
import profileImg from '../../img/profile-img.png';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';

interface PersonName {
    personName: string;
}

const Profile = ({ personName }: PersonName) => {
    return (
        <>
            <Box>
                <Avatar src={profileImg} alt="person-img" sx={{ width: 100, height: 100, margin: '0 auto' }} />
                <Typography variant="h6" sx={{ color: '#888CB7', fontWeight: 700, fontSize: '17px' }}>
                    Hello! {personName}
                </Typography>
                <Typography variant="body1" sx={{ color: '#A2A4B9;', fontWeight: 400, fontSize: '11px' }}>
                    Welcome Back To Your Insurance Portal
                </Typography>
                <Typography variant="body1" sx={{ color: '#A2A4B9;', fontWeight: 400, fontSize: '15px' }}>
                    Your Plan: <span style={{ color: '#33d69f' }}>Free</span>
                </Typography>
            </Box>
        </>
    );
};

export default Profile;
