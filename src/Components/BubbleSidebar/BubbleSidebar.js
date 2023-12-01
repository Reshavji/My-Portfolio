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
  const [position, setPosition] = useState({ x: "50%", y: "92%" });
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
    const handleTouchMove = (event) => {
      if (isDragging) {
        const touch = event.touches[0];
        const deltaX = touch.clientX - prevPositionRef.current.x;
        const deltaY = touch.clientY - prevPositionRef.current.y;
        const newPosX = position.x + deltaX;
        const newPosY = position.y + deltaY;
        setPosition({ x: newPosX, y: newPosY });
        prevPositionRef.current = { x: touch.clientX, y: touch.clientY };
      }
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, position.x, position.y]);

  const handleBubbleTouchStart = (event) => {
    const touch = event.touches[0];
    setIsDragging(true);
    prevPositionRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleBubbleClick = (event) => {
    // Check if an icon inside the sidebar has been clicked
    const isIconClicked = event.target.classList.contains('nav-item');
  
    if (!isIconClicked) {
      // Prevent the default action (routing) if the bubble itself is clicked
      event.preventDefault();
      setIsOpen(!isOpen); // Toggle the sidebar if the bubble is clicked
    }
  };
  
  return (
    <div
      ref={bubbleRef}
      className='bubble'
      style={{ top: position.y, left: position.x }}
      onTouchStart={handleBubbleTouchStart}
      onClick={handleBubbleClick}
    >
      <div className='icons'>
        {Icon ? Icon : menuItems.length > 0 && menuItems[0].icon}
      </div>
      <div className={`bubble-nav${isOpen ? ' open' : ''}`}>
        {menuItems.map((item, index) => (
          <Link key={index} to={item.path}>
            <div
              className={`nav-item ${activeIcon === item.path ? 'active' : ''}`}
              onClick={() => { setActiveIcon(item.path); setIcon(item.icon); }}
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
