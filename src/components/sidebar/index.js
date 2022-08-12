import { Drawer, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from './../../utils/tab';


TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const Sidebar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
      //   <div className='sidebar'>
      //    <div className='navbar-brand-box'>
      //       <Link to='/dashboard'>
      //         <img src="./logo.svg" className='login-brand'  alt="brand-logo"  />
      //       </Link>
      //    </div>

      //   <div className='sidebar-links'>
      //       <ul className="side-menu-nav justify-content-center nav nav-pills">
      //           <li className="nav-item">
      //               <a href="#">
                      
      //               </a>
      //           </li>
      //       </ul>
      //        <PersonOutlineOutlinedIcon />
      //   </div>
      // </div>
    <Box
    //  className='sidebar'
    >
      <Tabs
        orientation="vertical"
        // variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        // sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item On
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
    </Box>
  );
};



export default Sidebar;


