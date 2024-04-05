import React, { useEffect, useState } from 'react';
import './Basic.css';
import { Link } from 'react-router-dom';

const Basic: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [isComplete, setIsComplete] = useState(false); // Additional state to track completion

  const text = "Heey, it's Shreyas this side! I enjoy building websites and apps. Turning coffee into code, dreams into reality, pixels to functionality, trying to preserve some of my passion. Thanks for checking out my work! Try playing this Mine Game on next page.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setTypedText((typedText) => typedText + text[index]);
        index++;
      }
      if (index === text.length-1) {
        clearInterval(interval);
        setIsComplete(true); // Set completion state to true
      }
    }, 20);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="basic-back">
      <div className="basic-container">
        <div className="basic">{typedText}</div>
      </div>
      {isComplete && ( // Use the new state for conditional rendering
        <div className='next-page-button'>
          <Link className='bottom-subcontainer' to="/me">*_^</Link>
        </div>
      )}
      <div className='img-me'></div>
    </div>
  );
};

export default Basic;
