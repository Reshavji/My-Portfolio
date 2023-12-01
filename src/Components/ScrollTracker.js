// ScrollTracker.js
import { useEffect } from 'react';

const ScrollTracker = ({ setActiveComponent }) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      // Calculate the scroll percentage and determine the active component
      const scrollPercentage = (scrollY / (documentHeight - windowHeight)) * 100;
      let activeComponent = 'home';

      if (scrollPercentage > 25 && scrollPercentage <= 50) {
        activeComponent = 'about';
      } else if (scrollPercentage > 50 && scrollPercentage <= 75) {
        activeComponent = 'details';
      } else if (scrollPercentage > 75) {
        activeComponent = 'contact';
      }

      setActiveComponent(activeComponent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line
  }, []); // Empty dependency array means useEffect runs once after the initial render

  return null;
};

export default ScrollTracker;
