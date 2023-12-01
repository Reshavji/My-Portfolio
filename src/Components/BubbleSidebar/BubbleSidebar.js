import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import DescriptionIcon from '@material-ui/icons/Description';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import './BubbleSidebar.css';

const BubbleSidebar = () => {
  const location = useLocation();
  const { pathname } = location;
  const [isOpen, setIsOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 100, y: 20 });
  const bubbleRef = useRef(null);
  const prevPositionRef = useRef({ x: 100, y: 20 });
  const [activeIcon, setActiveIcon] = useState(pathname);
  const [Icon, setIcon] = useState("");
  const menuItems = [
    { path: '/home', icon: <HomeIcon fontSize='large' /> },
    { path: '/about', icon: <PersonIcon fontSize='large' /> },
    { path: '/details', icon: <DescriptionIcon fontSize='large' /> },
    { path: '/experience', icon: <WorkOutlineIcon fontSize='large' /> },
    { path: '/blog', icon: <FormatBoldIcon fontSize='large' /> },
    { path: '/contact', icon: <ContactMailIcon fontSize='large' /> },
  ];

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (isDragging) {
        const deltaX = event.clientX - prevPositionRef.current.x;
        const deltaY = event.clientY - prevPositionRef.current.y;
        const newPosX = position.x + deltaX;
        const newPosY = position.y + deltaY;
        setPosition({ x: newPosX, y: newPosY });
        prevPositionRef.current = { x: event.clientX, y: event.clientY };
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    const foundIcon = menuItems.find((item) => item.path === pathname);
    if (foundIcon) {
      setActiveIcon(foundIcon);
    }
  }, [isDragging, position.x, position.y]);

  const handleBubbleMouseDown = (event) => {
    setIsDragging(true);
    prevPositionRef.current = { x: event.clientX, y: event.clientY };
  };

  const handleBubbleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      ref={bubbleRef}
      className='bubble'
      style={{ top: position.y, left: position.x }}
      onMouseDown={handleBubbleMouseDown}
      onClick={handleBubbleClick}
    ><div className='icons'>{Icon}|| {menuItems.icon}</div>
      <div className={`bubble-nav${isOpen ? ' open' : ''}`}>
        {menuItems.map((item, index) => (
          <Link key={index} to={item.path}>
            <div
              className={`nav-item ${activeIcon === item.path ? 'active' : ''}`}
              onClick={() => {setActiveIcon(item.path); setIcon(item.icon);}}
            >
              {item.icon}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BubbleSidebar;
