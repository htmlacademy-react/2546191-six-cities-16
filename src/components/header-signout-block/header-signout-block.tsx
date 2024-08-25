import { Link } from 'react-router-dom';
import { AppRouter } from '../../shared/constants';

function HeaderSignoutBlock () :JSX.Element{
  return(
    <><li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to={AppRouter.Favorites}>
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
        <span className="header__favorite-count">3</span>
      </Link>
      </li><li className="header__nav-item">
      <Link className="header__nav-link" to={AppRouter.Main}>
        <span className="header__signout">Sign out</span>
      </Link>
         </li>
    </>
  );
}

export default HeaderSignoutBlock;
