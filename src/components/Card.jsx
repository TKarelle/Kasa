function Card({ logement }) {
    return (
      <div className="card">
        <img src={logement.pictures[0]} alt={logement.title} />
        <h2 className="title-card">{logement.title}</h2>
      </div>
    );
  }
  
  export default Card;
  