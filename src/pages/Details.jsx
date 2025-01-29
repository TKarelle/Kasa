// Details.jsx
import { useParams } from 'react-router-dom';
import logements from '../data/logements.json';
import Collapse from '../components/Collapse';
import Slideshow from '../components/Slideshow';
import RatingStars from '../components/RatingStars';
import '../styles/detail.scss'; 
import '../styles/main.scss';

function Details() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <p>Logement introuvable</p>;
  }

  return (
    <div className="details-container">
      <Slideshow pictures={logement.pictures} /> 
      <div className='details-div'>
        <div className='details'>
          <h3>{logement.title}</h3>
          <p className='logement-p'>{logement.location}</p>

          <ul className='list-tag'>
            {logement.tags.map((tag, index) => (
              <li className='tag' key={index}>{tag}</li>
           ))}
          </ul>
        </div>

      
        <div className='host-container'>
          <div className="rating">
            <RatingStars rating={logement.rating} />
          </div>

          <div className="host-info">
            <p className='host-name'>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
        </div>
      </div>
     

      <div className='collapse-container'>
        <Collapse title="Description">
          <p className='collapseText text-description'>{logement.description}</p>
        </Collapse>

        <Collapse title="Equipments">
          <ul className='collapseText list-equipement'>
            {logement.equipments.map((equipment, index) => (
              <li className='equipement' key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default Details;
