import { useState } from 'react';
import { useAppDispatch } from '../../store/hook/useAppDispatch';
import { login } from '../../store/user/user-thunk';


function LoginScreen() :JSX.Element{
  const [formData, setFormData] = useState({email:'',password:''});
  const dispatch = useAppDispatch();

  const handlChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setFormData({...formData,[event.target.name]:event.target.value});
  };

  const handlSibmit = (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    dispatch(login(formData));
  };
  return (

    <div className="page__login-container container">
      <section className="login">
        <h1 className="login__title">Sign in</h1>
        <form className="login__form form" action="#" method="post" onSubmit={handlSibmit}>
          <div className="login__input-wrapper form__input-wrapper">
            <label className="visually-hidden">E-mail</label>
            <input className="login__input form__input" type="email" name="email" placeholder="Email" value={formData.email} onChange={handlChange} required/>
          </div>
          <div className="login__input-wrapper form__input-wrapper">
            <label className="visually-hidden">Password</label>
            <input className="login__input form__input" type="password" name="password" placeholder="Password" value={formData.password} onChange={handlChange} required/>
          </div>
          <button className="login__submit form__submit button" type="submit">Sign in</button>
        </form>
      </section>
      <section className="locations locations--login locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>Amsterdam</span>
          </a>
        </div>
      </section>
    </div>);
}

export default LoginScreen;
