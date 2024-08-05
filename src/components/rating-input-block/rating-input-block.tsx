import { Fragment } from 'react';

type RatingInputBlockProps = {
    value:number;
    onChange:(e: React.ChangeEvent<HTMLInputElement>)=>void;
    title:string;
}

function RatingInputBlock ({value,onChange,title}:RatingInputBlockProps) :JSX.Element{
  return(
    <Fragment>
      <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio" onChange={onChange} />
      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </Fragment>
  );
}

export default RatingInputBlock;


