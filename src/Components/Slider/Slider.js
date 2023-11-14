import React, { useRef, useState, useEffect } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './Slider.css';

function Slider() {
  const elementRef = useRef(null);
  const imageContainerRef = useRef(null);
  const [scrolling, setScrolling] = useState(true);

  const imageUrls = [
    'https://logowik.com/content/uploads/images/731_java.jpg',
    'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png',
    'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png',
    'https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/7ca1b892-411f-4f4a-a5d3-82519495ae00/preview',
    'https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png',
    'https://w7.pngwing.com/pngs/780/57/png-transparent-node-js-javascript-database-mongodb-native-miscellaneous-text-trademark.png',
    'https://www.svgrepo.com/show/331488/mongodb.svg',
    'https://cdn.icon-icons.com/icons2/2699/PNG/512/redhat_logo_icon_168023.png',
    'https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/l72z2dydduvghanfmvgz',
    'https://static.wixstatic.com/media/6a4a49_2bc602dcc9fd45d9924981d075a9b689~mv2.jpg/v1/fill/w_780,h_780,al_c,q_85/6a4a49_2bc602dcc9fd45d9924981d075a9b689~mv2.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Kali-dragon-icon.svg/2048px-Kali-dragon-icon.svg.png',
  'https://cdn.pixabay.com/photo/2018/05/08/21/29/windows-3384024_960_720.png',
  ];
  const imageTitle=["Java",'HTML','CSS','JAVA SCRIPT', 'REACT', 'NODE JS', 'MONGO DB', 'REDHAT LINUX', 'HACK THE BOX', 'METASPLOIT', 'KALI LINUX', 'WINDOWS'
];

  const slideRight = () => {
    setScrolling(false);
    elementRef.current.scrollLeft += 500;
  };

  const slideLeft = () => {
    setScrolling(false);
    elementRef.current.scrollLeft -= 500;
  };

  useEffect(() => {
    if (scrolling) {
      const interval = setInterval(() => {
        if (imageContainerRef.current) {
          imageContainerRef.current.scrollLeft += 1; // Adjust the scrolling speed if needed
        }
      }, 50); // Adjust the interval if needed

      return () => {
        clearInterval(interval);
      };
    }
  }, [scrolling]);

  return (
    <div className="slider-container">
      <ArrowBackIosIcon fontSize="large"
        onClick={slideLeft}
        className="slider-icon left"
      />

      <div
        className="image-container"
        ref={(el) => {
          elementRef.current = el;
          imageContainerRef.current = el;
        }}
        onMouseEnter={() => setScrolling(false)}
        onMouseLeave={() => setScrolling(true)}
      >
        {imageUrls.map((imageUrl, index) => (
          <div className='name-log'>
          <img
            key={index}
            src={imageUrl}
            title={imageTitle[index]}
            alt={`${index}`}
            className='w-[110px] md:w-[200px] rounded-lg
            hover:border-[3px] border-gray-400 cursor-pointer
            hover:scale-110 transition-all duration-150 ease-in'
          />
          <p>{imageTitle[index]}</p></div>
        ))}
      </div>

      <ArrowForwardIosIcon fontSize="large"
        onClick={slideRight}
        className="slider-icon right"
      />
    </div>
  );
}

export default Slider;
