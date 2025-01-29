import logements from '../data/logements.json';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import '../styles/main.scss'; 
import Banner from '../components/Banner';


function Home() {
  return (
    <div className="main_div">
        <div className="banner-container">
           <Banner/>
        </div>
      
      <div className="card-container">
        {logements.map((logement) => (
          <Link key={logement.id} to={`/logement/${logement.id}`}>
             <Card logement={logement} />
        </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
