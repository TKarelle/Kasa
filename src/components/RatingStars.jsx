import '../styles/detail.scss';
function RatingStars({ rating }) {
    const totalStars = 5;
  
    return (
      <div className='rating'>
        {[...Array(totalStars)].map((_, index) => (
          <span className="stars"
            key={index}
            style={{
              color: index < Math.floor(rating) ? "#ff6060" : " #FBFBFB",
              
            }}
          >
            ★
          </span>
        ))}

        {rating % 1 !== 0 && (
          <span className="stars" style={{ color: "#ff6060"}}>★</span>
        )}
      </div>
    );
  }
  
  export default RatingStars;
  