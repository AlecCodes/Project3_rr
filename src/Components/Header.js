import { Link } from 'react-router-dom'

function Header(props){
    { 
        let bannerStatus = 1;
        let bannerTimer = 4000;

        function bannerLoop() {
            if (bannerStatus === 1) {
                document.getElementById('imgban2').style.opacity = '0';
                setTimeout(function() {
                    document.getElementById('imgban1').style.right = '0px';
                    document.getElementById('imgban1').style.zIndex = '1000';
                    document.getElementById('imgban2').style.right = '-1200px';
                    document.getElementById('imgban2').style.zIndex = '1500';
                    document.getElementById('imgban3').style.right = '1200px';
                    document.getElementById('imgban3').style.zIndex = '500';
                }, 500);
                setTimeout(function() {
                    document.getElementById('imgban2').style.opacity = '1';
                }, 1000);
                    bannerStatus = 2;
            }
            else if (bannerStatus === 1) {
                document.getElementById('imgban3').style.opacity = '0';
                setTimeout(function() {
                    document.getElementById('imgban2').style.right = '0px';
                    document.getElementById('imgban2').style.zIndex = '1000';
                    document.getElementById('imgban3').style.right = '-1200px';
                    document.getElementById('imgban3').style.zIndex = '1500';
                    document.getElementById('imgban1').style.right = '1200px';
                    document.getElementById('imgban1').style.zIndex = '500';
                }, 500);
                setTimeout(function() {
                    document.getElementById('imgban3').style.opacity = '1';
                }, 1000);
                    bannerStatus = 3;
            }
            else if (bannerStatus === 1) {
                document.getElementById('imgban1').style.opacity = '0';
                setTimeout(function() {
                    document.getElementById('imgban3').style.right = '0px';
                    document.getElementById('imgban3').style.zIndex = '1000';
                    document.getElementById('imgban1').style.right = '-1200px';
                    document.getElementById('imgban1').style.zIndex = '1500';
                    document.getElementById('imgban2').style.right = '1200px';
                    document.getElementById('imgban2').style.zIndex = '500';
                }, 500);
                setTimeout(function() {
                    document.getElementById('imgban1').style.opacity = '1';
                }, 1000);
                    bannerStatus = 1;
            }
        }
        }

    return <div className="header">
        <Link to='/'><h1>Hungr</h1></Link>
        <div className='main-banner' id='main-banner'>
            <div className='imgban' id='imgban3'>

            </div>
            <div className='imgban' id='imgban2'>

            </div>
            <div className='imgban' id='imgban1'>

            </div>
        </div>
    </div>
}
export default Header