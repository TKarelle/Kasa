import logoFooter from '../assets/images/footer.png';
import '../styles/main.scss'; 

function Footer() {
    return (
      <footer>
        <img src={logoFooter} alt='logo'/>
        <p>© 2020 Kasa. All<span className='break'>rights reserved</span> </p>
      </footer>
    );
  }
  
  export default Footer;
  