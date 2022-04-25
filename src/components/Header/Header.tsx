import { MenuList, MenuItem } from '@mui/material';
import styled from '@emotion/styled';

const Header = () => {
    const SideBarWapper = styled.div`
        width: 100%;
        /* height: 87px; */
        background: #ffffff;
        box-shadow: 3px 5px 15px rgba(0, 0, 0, 0.1);
        border-radius: 0px 20px 0px 0px;
    `;

    return (
        <SideBarWapper>
            <MenuList sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <MenuItem>Overview</MenuItem>
                <MenuItem>Policy</MenuItem>
                <MenuItem>Report</MenuItem>
            </MenuList>
        </SideBarWapper>
    );
};

export default Header;
