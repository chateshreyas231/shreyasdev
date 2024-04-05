import React from 'react';
import './Skills.css'
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';


const logos = [
    require('../src/components/logos/1.png'),
    require('../src/components/logos/2.png'),
    require('../src/components/logos/3.png'),
    require('../src/components/logos/4.png'),
    require('../src/components/logos/5.png'),
    require('../src/components/logos/6.png'),
    require('../src/components/logos/7.png'),
    require('../src/components/logos/8.png'),
    require('../src/components/logos/9.png'),
    require('../src/components/logos/10.png'),
    require('../src/components/logos/11.png'),
    require('../src/components/logos/12.png'),
    require('../src/components/logos/13.png'),
    require('../src/components/logos/14.png'),
    require('../src/components/logos/15.png'),
      ];
    


const Skills = () => {
const [state, setState] = React.useState({
    bottom: false
});

const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event && event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
        return;
    }

    setState({ bottom: open });
};

return (
    <div>
        <div onClick={toggleDrawer(true)} style={{ cursor: 'pointer' }}>
            <u>Skills</u>
        </div>
        <SwipeableDrawer
            anchor='bottom'
            variant="persistent" // This keeps the drawer open until manually closed
            open={state['bottom']}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            sx={{
                '& .MuiDrawer-paper': { 
                    width: { xs: '100%', sm: '50%' }, // 100% width on small devices, 50% on others
                    mx: { sm: 'auto' },
                    borderRadius: '15px' // Center the drawer on screens larger than 'sm'
                }
            }}
        > <div className='sdown'>Swipe Down / Click on modal to exit</div>
        <div className='sksplayt'></div>
            <Box
                role="presentation"
                className='sks-logos-container'
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                {logos.map((logo, index) => (
                    <img className='sks-logo' key={index} src={String(logo)} alt={`Tech Logo ${index + 1}`} />
                ))}
            </Box>
            <div className='sksplay'></div>
        </SwipeableDrawer>
        
    </div>
);
};

export default Skills;