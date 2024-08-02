import clsx from 'clsx';

type PremiumBlockProps = {
  className : string;
}

function PremiumBlock ({className}:PremiumBlockProps) :JSX.Element{
  return(
    <div className={clsx(className)}><span>Premium</span></div>
  );
}

export default PremiumBlock;
