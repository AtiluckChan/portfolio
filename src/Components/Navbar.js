import React, { useState} from "react"
import Logo from '../Assets/Logo.png'
import { HiOutlineBars3 } from "react-icons/hi2";
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
 import HomeIcon from "@mui/icons-material/Home"
 import InfoIcon from "@mui/icons-material/Info"
 import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded';
 import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
 import ChecklistRtlRoundedIcon from '@mui/icons-material/ChecklistRtlRounded';
 import Diversity3RoundedIcon from '@mui/icons-material/Diversity3Rounded';
 import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';

const Navbar = ({ scrollToSection }) => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
      {
        text: "Home",
        icon: <HomeIcon />,
      },
      {
        text: "About",
        icon: <InfoIcon />,
      },
      {
        text: "Skills",
        icon: <LightbulbRoundedIcon />,
      },
      {
        text: "Work Experience",
        icon: <BusinessCenterRoundedIcon />,
      },
      {
        text: "Projects",
        icon: <ChecklistRtlRoundedIcon />,
      },
      {
        text: "Activities",
        icon: <Diversity3RoundedIcon />,
      },
      {
        text: "Certificates",
        icon: <WorkspacePremiumRoundedIcon />,
      },
    ];
    return (
        <nav>
            <div className="nav-logo-container">
                <img src={Logo} alt="Logo" />
            </div>
            {/* <div className="navbar-links-container">
                <a href="">Home</a>
                <a onClick={() => scrollToSection('about')}>About</a>
                <a onClick={() => scrollToSection('skills')}>Skills</a>
                <a onClick={() => scrollToSection('workExperience')}>Work Experience</a>
                <a onClick={() => scrollToSection('project')}>Projects</a>
                <a onClick={() => scrollToSection('activity')}>Activities</a>
                <a onClick={() => scrollToSection('certificate')}>Certificates</a>
            </div> */}
            <div className="navbar-links-container">
                <button onClick={() => scrollToSection('home')} className="link-button">Home</button>
                <button onClick={() => scrollToSection('about')} className="link-button">About</button>
                <button onClick={() => scrollToSection('skills')} className="link-button">Skills</button>
                <button onClick={() => scrollToSection('workExperience')} className="link-button">Work Experience</button>
                <button onClick={() => scrollToSection('project')} className="link-button">Projects</button>
                <button onClick={() => scrollToSection('activity')} className="link-button">Activities</button>
                <button onClick={() => scrollToSection('certificate')} className="link-button">Certificates</button>
            </div>
            <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>
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
                        <ListItemButton>
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
    )
}

export default Navbar