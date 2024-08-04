import clsx from 'clsx';
import { getRatingWidth } from '../../utils/utils';

type OfferRatingBlockProps = {
  rating: number;
  className:string;
}

function OfferRatingBlock ({rating,className}:OfferRatingBlockProps) :JSX.Element{
  const classNameMain:string = `${className }__rating`;
  const classNameRating:string = `${className }__rating-value`;
  let isShowRating:boolean = false;
  if (className === 'offer'){
    isShowRating = true;
  }
  className = `${className }__stars`;
  return(
    <div className={clsx(classNameMain,'rating')}>
      <div className={clsx(className,'rating__stars')}>
        <span style={{width:getRatingWidth(rating)}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {isShowRating && <span className={clsx(classNameRating,'rating__value')}>{rating}</span>}
    </div>
  );
}

export default OfferRatingBlock;
