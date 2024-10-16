import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";
import Logo from '../Assets/Logo.png';
import { HiOutlineBars3 } from "react-icons/hi2";  // React Icons import
import {
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import ChecklistRtlRoundedIcon from '@mui/icons-material/ChecklistRtlRounded';
import Diversity3RoundedIcon from '@mui/icons-material/Diversity3Rounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';

const Navbar = ({ scrollToSection }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)'); // Breakpoint for mobile

  const menuOptions = [
    { text: "Home", icon: <HomeIcon />, section: "home" },
    { text: "About", icon: <InfoIcon />, section: "about" },
    { text: "Skills", icon: <LightbulbRoundedIcon />, section: "skills" },
    { text: "Work Experience", icon: <BusinessCenterRoundedIcon />, section: "workExperience" },
    { text: "Projects", icon: <ChecklistRtlRoundedIcon />, section: "project" },
    { text: "Activities", icon: <Diversity3RoundedIcon />, section: "activity" },
    { text: "Certificates", icon: <WorkspacePremiumRoundedIcon />, section: "certificate" },
  ];

  return (
    <nav className="navbar-container">
      <div className="nav-logo-container">
        <img src={Logo} alt="Logo" />
      </div>

      {isMobile ? (
        <div className="navbar-menu-container">
          {/* Increased icon size using the `size` prop */}
          <HiOutlineBars3 size={30} onClick={() => setOpenMenu(true)} />
        </div>
      ) : (
        <div className="navbar-links-container">
          <button onClick={() => scrollToSection('home')} className="link-button">Home</button>
          <button onClick={() => scrollToSection('about')} className="link-button">About</button>
          <button onClick={() => scrollToSection('skills')} className="link-button">Skills</button>
          <button onClick={() => scrollToSection('workExperience')} className="link-button">Work Experience</button>
          <button onClick={() => scrollToSection('project')} className="link-button">Projects</button>
          <button onClick={() => scrollToSection('activity')} className="link-button">Activities</button>
          <button onClick={() => scrollToSection('certificate')} className="link-button">Certificates</button>
        </div>
      )}

      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  onClick={() => {
                    scrollToSection(item.section);
                    setOpenMenu(false); // Close the drawer after clicking
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;

