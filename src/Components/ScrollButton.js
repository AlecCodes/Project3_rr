import React, {useState} from 'react';
import { Button } from './Button';

const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 10){
	setVisible(true)
	}
	else if (scrolled <= 10){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	});
};

window.addEventListener('scroll', toggleVisible);

return (
    <Button onClick={scrollToTop}
	    style={{display: visible ? 'inline' : 'none'}}>
        <button className='return'>Return To Top</button>
    </Button>
    
);
}

export default ScrollButton;
