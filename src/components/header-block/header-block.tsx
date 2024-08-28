import { Link } from 'react-router-dom';
import { AppRouter } from '../../shared/constants';
import HeaderSigninBlock from '../header-signin-block/header-signin-block';
import HeaderSignoutBlock from '../header-signout-block/header-signout-block';
import { useAuth } from '../../hooks/useAuth';

type HeaderBlockProps = {
    isShowUserInfo: boolean;
}

function HeaderBlock({isShowUserInfo}:HeaderBlockProps) :JSX.Element{
  const isAuth = useAuth();
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRouter.Main}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>{isShowUserInfo &&
        <nav className="header__nav">
          <ul className="header__nav-list">
            {isAuth ? (<HeaderSignoutBlock/>) : (<HeaderSigninBlock/>)}
          </ul>
        </nav>}

        </div>
      </div>
    </header>
  );
}

export default HeaderBlock;
