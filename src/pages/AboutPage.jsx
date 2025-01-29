// ./pages/AboutPage.jsx
import React from 'react';
import Collapse from '../components/Collapse';
import imgAbout from '../assets/images/image2.png';
import '../styles/main.scss'; 
import '../styles/about.scss';

function AboutPage() {
  return (
    <div className="about-page">
      <img src={imgAbout} alt='image à propos'/>
      <div className='collapse-div'>
        <Collapse className="collpase-about" title='Fiabilité'>
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par  nos équipes.</p>
        </Collapse>
        <Collapse title='Respect'>
          <p>La bienveillance fait partie des valeurs fondatrices de kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme.</p>
        </Collapse>
        <Collapse title='Service'>
          <p>La qualité du service est au coeur de notre engagement chez kasa. Nous veillons à ce que chaque interaction, que ce soît avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.</p>
        </Collapse>
        <Collapse title='Securité'>
          <p>La securité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critère de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </Collapse>

      </div>
      
    </div>
  );
}

export default AboutPage;
