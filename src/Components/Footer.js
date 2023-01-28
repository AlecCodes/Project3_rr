import { SocialIcon } from 'react-social-icons';

function Footer(props){
    return(
    <footer className="footer">
        <SocialIcon network="twitter" className='social1'/>
        <SocialIcon network="reddit" className='social2'/>
    </footer>
    )
}

export default Footer