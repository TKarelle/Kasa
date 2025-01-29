import imgBanner from '../assets/images/image1.png'
import '../styles/main.scss'; 

function Banner() {
    return (
      <div className="banner">
        <img src={imgBanner} alt="image prinicpale" />
        <h1>Chez vous, <span className='break'> partout et ailleurs</span></h1>
      </div>
    );
  }
  
  export default Banner;