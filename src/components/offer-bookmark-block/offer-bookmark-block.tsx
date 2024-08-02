import clsx from 'clsx';

type OfferBookMarkBlockProps = {
  buttonClassName : string;
  svgClassName : string;
  isFavorite : boolean;
  width: number;
  height: number;
}

function OfferBookMarkBlock ({buttonClassName,svgClassName,isFavorite,width,height}:OfferBookMarkBlockProps) :JSX.Element{
  const buttonClassNameActive = `${buttonClassName}--active`;
  return(
    <button className={clsx(isFavorite ? buttonClassNameActive : buttonClassName,'button')} type="button">
      <svg className={clsx(svgClassName)} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden"> {isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}

export default OfferBookMarkBlock;
