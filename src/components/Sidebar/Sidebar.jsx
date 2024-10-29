import { Box, Divider, IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoIcon from '../../assets/LogoIcon';
import ProfileIcon from '../../assets/ProfileIcon';
import CommunityIcon from '../../assets/CommunityIcon';
import CommentsIcon from '../../assets/CommentsIcon';
import SettingIcon from '../../assets/SettingIcon';
import NotifyIcon from '../../assets/NotifyIcon';
import LogoutIcon from '../../assets/LogoutIcon';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Team');
  const navigate = useNavigate();

  const sidebarItems = [
    { label: 'Profile', icon: <ProfileIcon />, path: '/dashboard/profile' },
    { label: 'Team', icon: <CommunityIcon />, path: '/dashboard/team' },
    { label: 'Feedback', icon: <CommentsIcon />, path: '/dashboard/feedback' },
    
  ];

  const sidebarLowerItems = [
    { label: 'Settings', icon: <SettingIcon />, path: '/settings' },
    { label: 'Notifications', icon: <NotifyIcon />, path: '/notifications' },
    { label: 'Logout', icon: <LogoutIcon style={{ color: 'red' }} />, path: '/logout' },
  ]

  const handleItemClick = (label, path) => {
    setActiveItem(label);
    navigate(path);
  };

  return (
    <Box
      flex={1}
      sx={{ backgroundColor: "#1B1558", display: 'flex', justifyContent: "center", paddingTop: '20px' }}
    >
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <LogoIcon style={{ marginTop: "15px" }} />
          <Typography sx={{ color: "#FFFFFF", fontSize: "12px" }}>
            v 1.0.02
          </Typography>
        </Box>
        <Divider sx={{ backgroundColor: 'white' }} width="40px"/>


        {sidebarItems.map((item, index) => (
          <Box key={index} display="flex" flexDirection="column" alignItems="center">
            <IconButton
              onClick={() => handleItemClick(item.label, item.path)}
              sx={{
                marginTop: "5px",
                border: "1px solid #30287E",
                backgroundColor: activeItem === item.label ? "primary.main" : "#30287E",
                padding: '8px',
                borderRadius: "4px",
                '&:hover': {
                  backgroundColor: activeItem === item.label ? "primary.main" : "#30287E",
                  border: "1px solid #30287E",
                },
              }}
            >
              {item.icon}
            </IconButton>
            <Typography sx={{ color: "#FFFFFF", fontSize: "12px",marginTop:"3px" }}>
              {item.label}
            </Typography>
          </Box>
        ))}
<Box marginTop="12rem">
        {sidebarLowerItems.map((item,index) => (
            <Box key={index} display="flex" flexDirection="column" alignItems="center">
            <IconButton
              onClick={() => handleItemClick(item.label, item.path)}
              sx={{
                marginTop: "20px",
                border: "1px solid #30287E",
                backgroundColor: activeItem === item.label ? "primary.main" : "#30287E",
                padding: '8px',
                borderRadius: "4px",
              }}
            >
              {item.icon}
            </IconButton>
            
          </Box>
        ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
