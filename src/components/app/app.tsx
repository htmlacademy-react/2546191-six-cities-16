import MainScreen
  from '../../pages/main-screen/main-screen';

type AppScreanProps = {
    countOfOffers : number;
}

function App({countOfOffers}:AppScreanProps) : JSX.Element{
  return (
    < MainScreen countOfOffers = {countOfOffers}/>
  );
}

export default App;
