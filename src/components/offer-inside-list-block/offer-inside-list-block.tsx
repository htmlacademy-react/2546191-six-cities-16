type OfferInsideListBlockProps ={
    goods:string[];
}

function OfferInsideListBlock ({goods}:OfferInsideListBlockProps) :JSX.Element{
  return(
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {goods.map((el)=>(
          <li className="offer__inside-item" key={el}>{el}</li>
        ))}
      </ul>
    </div>
  );
}


export default OfferInsideListBlock;
