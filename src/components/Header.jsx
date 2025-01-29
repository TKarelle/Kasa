import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import '../styles/main.scss';  

function Header() {
  return (
    <header>
      <img className="logo" src={Logo} alt="Logo" />
      <nav>
        <ul>
          <li><Link to="/">A<span className='upper'>ccueil</span></Link></li>
          <li><Link to="/about">A <span className='upper'>Propos</span></Link></li> 
        </ul>
      </nav>
    </header>
  );
}

export default Header;
