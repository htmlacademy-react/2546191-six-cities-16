import { Review } from '../../types/review';
import OfferRatingBlock from '../offer-rating-block/offer-rating-block';
import ReviewFormBlock from '../review-form-block/review-form-block';
import { getShortFromat, getTextFromat } from './utils';

type OfferReviewBlockProps = {
  reviews:Review[];
}

function OfferReviewBlock ({reviews}:OfferReviewBlockProps) :JSX.Element{
  let countReview:number = 0;

  if (reviews.length > 0){
    countReview = reviews.length;
  }
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{countReview && countReview}</span></h2>
      <ul className="reviews__list">
        {reviews && reviews.map((el)=>(
          <li className="reviews__item" key ={el.id + el.date}>
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar" src={el.user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
              </div>
              <span className="reviews__user-name">
                {el.user.name}
              </span>
            </div>
            <div className="reviews__info">
              <OfferRatingBlock rating={el.rating} className='reviews'/>
              <p className="reviews__text">{el.comment}</p>
              <time className="reviews__time" dateTime={getShortFromat(el.date)}>{getTextFromat(el.date)}</time>
            </div>
          </li>
        ))}
      </ul>
      <ReviewFormBlock />
    </section>
  );
}

export default OfferReviewBlock;
