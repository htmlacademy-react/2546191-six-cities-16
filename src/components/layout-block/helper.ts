import { AppRouter } from '../../shared/constants';

export const getLayoutState = (pathname:AppRouter) =>{
  let pageClassName = 'page';
  let mainClassName = '';
  let isShowUserInfo = true;
  let isShowFooter = false;

  switch(pathname){
    case AppRouter.Main:
      pageClassName = 'page page--gray page--main';
      mainClassName = 'page__main page__main--index';
      break;

    case AppRouter.Login:
      pageClassName = 'page page--gray page--login';
      mainClassName = 'page__main page__main--login';
      isShowUserInfo = false;
      break;

    case AppRouter.Offer:
      mainClassName = 'page__main page__main--offer';
      isShowFooter = true;
      break;

    case AppRouter.Favorites:
      mainClassName = 'page__main page__main--favorites';
      isShowFooter = true;
      break;
  }

  return {pageClassName,mainClassName, isShowUserInfo, isShowFooter};
};
