import { Link } from 'react-router-dom';

function ErrorNotFound() :JSX.Element{
  return(
    <div>
      <h1>Oops! That page can’t be found.</h1>
      <p>404 Not Found</p>
      <Link to="/">Go to  main</Link>
    </div>
  );
}
export default ErrorNotFound;
