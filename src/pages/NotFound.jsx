import { Link } from 'react-router-dom';
import '../styles/main.scss';
function NotFound() {
  return (
    <div className='notfound-div'>
      <h1 className='notfound-h1'>404</h1>
      <p className='notfound-p'>Oups! La page que <span className='break'>vous demandez n'existe pas.</span></p>
      <Link to="/" className='notfound-a'>Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default NotFound;
