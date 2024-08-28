import { Outlet, useLocation } from 'react-router-dom';
import HeaderBlock from '../header-block/header-block';
import FooterBlock from '../footer-block/footer-block';
import { AppRouter } from '../../shared/constants';
import { getLayoutState } from './helper';
import clsx from 'clsx';

function LayoutBlock() :JSX.Element{
  const {pathname} = useLocation();
  const {pageClassName, mainClassName, isShowUserInfo, isShowFooter} = getLayoutState(pathname as AppRouter);


  return (
    <div className={clsx(pageClassName)}>
      <HeaderBlock isShowUserInfo = {isShowUserInfo}/>
      <main className={clsx(mainClassName)}>
        <Outlet/>
      </main>
      {isShowFooter && <FooterBlock/>}
    </div>

  );
}

export default LayoutBlock;
