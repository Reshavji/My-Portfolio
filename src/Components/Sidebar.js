import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import DescriptionIcon from '@material-ui/icons/Description';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import './Sidebar.css';

function Sidebar() {
  const location = useLocation(); // Get the current location
  const { pathname } = location;

  return (
    <div className="sidebar">
      <div className='logo' title='Reshav Ji'>R</div>
      <div className='nav-icon'>
        <ul>
        <Link to="/home">
            <li title='Home' className={location.pathname === '/home' ? 'active' : ''}>
              <HomeIcon fontSize='large' />
            </li>
          </Link>
          
          <Link to="/about">
            <li title='About' className={pathname === '/about' ? 'active' : ''}>
              <PersonIcon fontSize='large' />
            </li>
          </Link>
          <Link to="/details">
            <li title='Details' className={pathname === '/details' ? 'active' : ''}>
            <DescriptionIcon fontSize='large' />
            </li>
          </Link>
          <Link to="/experience">
            <li title='Experience' className={pathname === '/experience' ? 'active' : ''}>
            <WorkOutlineIcon fontSize='large' />
            </li>
          </Link>
          
          <Link to="/blog">
            <li title='Blog' className={pathname === '/blog' ? 'active' : ''}>
            <FormatBoldIcon fontSize='large' />
            </li>
          </Link>
          <Link to="/contact">
            <li title='Contact' className={pathname === '/contact' ? 'active' : ''}>
            <ContactMailIcon fontSize='large' />
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
