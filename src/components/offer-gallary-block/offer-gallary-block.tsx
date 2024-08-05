type OfferGallaryBlockPops ={
    images:string[];
}

function OfferGallaryBlock ({images}:OfferGallaryBlockPops) :JSX.Element{
  return(
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images.map((el)=>(
          <div className="offer__image-wrapper" key={el}>
            <img className="offer__image" src={el} alt="Photo studio"/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfferGallaryBlock;

