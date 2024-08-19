import clsx from 'clsx';
import { OfferPreview } from '../../types/offerPreview';

type OfferListBlockProps = {
    offers : OfferPreview[];
    extraClassName?:string;
    children:(data:OfferPreview)=>React.ReactNode;
}


function OfferListBlock ({offers, extraClassName, children}:OfferListBlockProps) :JSX.Element{
  return(
    <div className={clsx('places__list',extraClassName && extraClassName)}>
      {offers && offers.map((el) =>children(el))}
    </div>
  );
}

export default OfferListBlock;
