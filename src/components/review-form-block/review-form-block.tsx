import { useState } from 'react';
import { RATING } from '../../shared/constants';
import RatingInputBlock from '../rating-input-block/rating-input-block';

function ReviewFormBlock () :JSX.Element{
  const [formData,setFormData] = useState({rating:0,text:''});
  const textAreaChange = (ev:React.ChangeEvent<HTMLTextAreaElement>) =>{
    setFormData({...formData,text: ev.target.value});
  };

  const inputChange = (ev:React.ChangeEvent<HTMLInputElement>) =>{
    setFormData({...formData, rating:Number(ev.target.value)});
  };

  return(
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          RATING.map((el)=>(
            <RatingInputBlock value={el.value} title={el.title} key={el.value} onChange={inputChange}/>))
        }
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        onChange={textAreaChange}
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default ReviewFormBlock;


