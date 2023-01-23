import { SocialIcon } from 'react-social-icons';

function Footer(props){
    return(
    <footer className="footer">
        <SocialIcon network="twitter" className='social'/>
        <SocialIcon network="reddit" className='social'/>
    </footer>
    )
}

export default Footer