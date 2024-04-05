import React, { useState, useEffect, useRef } from 'react';
import { useTrail, useChain, useSprings, animated, useSpringRef , useSpring} from '@react-spring/web'
import './LandingPage.css'
import { Link } from 'react-router-dom';
import Swipeable from './Swipeable';
import Skills from './Skills';
import ContactForm from './Contactform';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Lenis from "@studio-freight/lenis"
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Popper, { PopperPlacementType } from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import { colors } from '@mui/material';

const linkedInUrl = 'https://www.linkedin.com/in/shreyas-chate/';
const githubUrl = 'https://github.com/chateshreyas231';
const instaurl = 'https://www.instagram.com/shreyas.chate/';


const COORDS = [
  // Top horizontal line
  [0, 0], [10, 0], [20, 0],[0, 20], [10, 20], [20, 20], [0, 40], [10, 40], [20, 40], [0, 10],[20, 30],//S
  [40,0], [40,10], [40,20], [40,30], [40,40], [60,0], [60,10], [60,20], [60,30], [60,40], [50,20], //H
  [80, 0], [80, 10], [80, 20], [80, 30], [80, 40], [90, 0], [90, 20], [100, 0], [100, 20], [110, 10], [110, 30], [110, 40],//R
  [130, 0], [140, 0], [150, 0], [130, 20], [140, 20], [150, 20], [130, 40], [140, 40], [150, 40], [130, 10], [130, 30],//E
  [170, 0], [190, 0], [180, 10], [180, 20], [180, 30], [180, 40],//Y
  [220, 0], [210,10],[210, 20],[230,10], [230, 20], [210, 40],[230, 30], [210, 30], [230, 40], [220, 20],//A
  [250, 0], [260, 0], [270, 0], [250, 20], [260, 20], [270, 20], [250, 40], [260, 40], [270, 40], [250, 10], [270, 30],//S
  [50, 80], [60, 80], [40, 100], [50, 120], [60, 120], [40, 90], [40, 110],//C
  [80, 80], [80, 90], [80, 100], [80, 110], [80, 120], [100, 80], [100, 90], [100, 100], [100, 110], [100, 120], [90, 100],//H
  [130, 80], [120, 100], [140, 100],[120, 110], [140, 110],[120, 90], [140, 90], [120, 120], [140, 120], [130, 100],//A
  [170, 80], [170, 90], [170, 100], [170, 110], [170, 120], [160, 80], [180, 80],//T
  [200, 80], [210, 80], [220, 80], [200, 100], [210, 100], [220, 100], [200, 120], [210, 120], [220, 120], [200, 90], [200, 110],//E

];

const STROKE_WIDTH = 0.3
const OFFSET = STROKE_WIDTH / 2
const MAX_WIDTH = 280 + OFFSET * 2
const MAX_HEIGHT = 130 + OFFSET * 2

export default function LandingPage() {

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const [openpop, setOpenPop] = React.useState(false);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();

  const handleClickPop =
    (newPlacement: PopperPlacementType) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setOpenPop((prev) => placement !== newPlacement || !prev);
      setPlacement(newPlacement);
    };


  const blinkSpring = useSpring({
    from: { opacity: 1 },
    to: { opacity: 0 },
    loop: true,
    config: { duration: 1000 }, // Adjust blinking speed here
  });

  const gridApi = useSpringRef();

  const gridSprings = useTrail(30, {
    ref: gridApi,
    from: {
      x2: 0,
      y2: 0,
    },
    to: {
      x2: MAX_WIDTH,
      y2: MAX_HEIGHT,
    },
  })

  const boxApi = useSpringRef()

  const [boxSprings, api] = useSprings(COORDS.length, i => ({
    ref: boxApi,
    from: { scale: 0 },
    to: { scale: 1 },
    delay: i * 50,
    config: { mass: 2, tension: 100 },
  }));

  useChain([gridApi, boxApi], [0, 1], 100)

  const [clickedBoxes, setClickedBoxes] = useState<{ [key: number]: 'clicked' | 'mine' | 'none' }>({});
  const [chances, setChances] = useState(0);
  const [minesFound, setMinesFound] = useState(0);
  const [gameStatus, setGameStatus] = useState<'won' | 'lost' | null>(null);

  // Set TOTAL_MINES to 10 as required
  const TOTAL_MINES = 25;
  const [mineIndices, setMineIndices] = useState(() => {
    const mines = new Set<number>();
    while (mines.size < TOTAL_MINES) {
      const randomIndex = Math.floor(Math.random() * COORDS.length);
      mines.add(randomIndex);
    }
    return mines;
  });

  const handleClick = (index: number) => {
    if (clickedBoxes[index] === 'clicked' || gameStatus !== null) return; // Prevent clicking if already clicked or game is over
  
    const isMine = mineIndices.has(index);
    setChances(prev => prev + 1);
  
    if (isMine) {
      setMinesFound(prev => {
        // Check if the user has won after updating minesFound
        const newMinesFound = prev + 1;
        if (newMinesFound === 5) {
          setGameStatus('won'); // Set the game status to won
        }
        return newMinesFound;
      });
      setClickedBoxes(prev => ({ ...prev, [index]: 'mine' })); // Set as 'mine'
      // Remove the found mine from the set of mine indices
      setMineIndices(prev => {
        const newMineIndices = new Set(prev);
        newMineIndices.delete(index);
        return newMineIndices;
      });
    } else {
      setClickedBoxes(prev => ({ ...prev, [index]: 'clicked' })); // Set as 'clicked' if not a mine
    }
  
    // Check if the user has lost after using up all chances
    if (chances + 1 === 20) {
      setGameStatus(prev => (prev === 'won' ? prev : 'lost')); // Set the game status to lost if not already won
    }
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
    })
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <div className={'background-land'}>
            <Link className='back-but' to="/">^^</Link>
      <div className='land'>

        <svg viewBox={`0 0 ${MAX_WIDTH} ${MAX_HEIGHT}`}>
          <g>
            {gridSprings.map(({ x2 }, index) => (
              <animated.line
                x1={0}
                y1={index * 10 + OFFSET}
                x2={x2}
                y2={index * 10 + OFFSET}
                key={index}
                strokeWidth={STROKE_WIDTH}
                stroke="currentColor"
              />
            ))}
            {gridSprings.map(({ y2 }, index) => (
              <animated.line
                x1={index * 10 + OFFSET}
                y1={0}
                x2={index * 10 + OFFSET}
                y2={y2}
                key={index}
                strokeWidth={STROKE_WIDTH}
                stroke="currentColor"
              />
            ))}
          </g>
          {boxSprings.map(({ scale }, index) => {
  // Determine if the current index is part of the last line (smiley)
  const isSmiley = COORDS.slice(-7).some(([x, y]) => COORDS[index][0] === x && COORDS[index][1] === y);

  return (
    <g key={index}>
        <animated.rect
                  width={10}
                  height={10}
                  fill={clickedBoxes[index] === 'mine' ? 'red' : clickedBoxes[index] === 'clicked' ? 'gray' : 'currentColor'}
                  style={{
                    cursor: 'pointer',
                    transformOrigin: 'center',
                    transform: scale.to(s => `translate(${COORDS[index][0]}px, ${COORDS[index][1]}px) scale(${s})`),
                    // Apply blinking only to the smiley
                  }}
                  onClick={() => handleClick(index)}
                />
      {clickedBoxes[index] === 'mine' && (
        <text x={COORDS[index][0] + 2.5} y={COORDS[index][1] + 10} fontSize='10' fill='white' textAnchor='middle'>*</text>
      )}
    </g>
  );
})}
        </svg>
      </div>
      <div className='game-info'>
      <div>Chances Used: {chances}/20</div>
      
      <div>Mines Found: {minesFound}/5</div>
      {gameStatus && <div className={`game-status ${gameStatus}`}>You {gameStatus}!</div>} {/* Display game status here */}
    </div>

          
      
  <div className='bottom-land'>

          <div>
            <Link className='bottom-subland' to="/projects">Projects</Link>
          </div>
          <div>
            <Link className='bottom-subland' to="/experience">Experince & Education</Link>
          </div>
          <div className='bottom-subland'>
            <Skills/>
          </div>
          <div className='bottom-subland'>      
              <div onClick={handleOpen}>
                <u>Contact Me</u>
          </div>
              <ContactForm open={open} handleClose={handleClose} />
            </div>

      
             {/* <Link className='mario' to="/skills"></Link> */}
      </div>

      <div className='footer-icons'>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 2 }}>
        <IconButton component="a" href={linkedInUrl} target="_blank" rel="noopener noreferrer"  sx={{
    color: '#fff', // LinkedIn brand color, change as needed
  }}>
          <LinkedInIcon />
        </IconButton>
        <IconButton component="a" href={githubUrl} target="_blank" rel="noopener noreferrer"sx={{
                color: '#fff', // LinkedIn brand color, change as needed
              }}>
          <GitHubIcon />
        </IconButton>
        <IconButton component="a" href={instaurl} target="_blank" rel="noopener noreferrer"sx={{
                color: '#fff', // LinkedIn brand color, change as needed
              }}>
          <InstagramIcon />
        </IconButton>
        
      <Popper
        // Note: The following zIndex style is specifically for documentation purposes and may not be necessary in your application.
        sx={{ zIndex: 1200 }}
        open={openpop}
        anchorEl={anchorEl}
        placement={placement}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper elevation={3}>
              <Typography sx={{ p: 2 }}>chateshreyas231@gmail.com / shreyaschate20@gmail.com</Typography>
            </Paper>
          </Fade>
        )}
        </Popper>

         <Button onClick={handleClickPop('top')}><AlternateEmailIcon  className='emailicon'/></Button>

         <div className='madewith'> Made with <div className='drink'></div></div>
        
        
        {/* Add more icons as needed */}
      </Box>
      </div>
      
    </div>
  )
}
