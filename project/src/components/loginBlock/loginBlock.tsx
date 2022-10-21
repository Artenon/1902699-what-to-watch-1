import { Link } from 'react-router-dom';
import { AuthorizationStatus, AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';

function LoginBlock(): JSX.Element {
  const {authorizationStatus} = useAppSelector((state) => state);

  return (
    <ul className="user-block">
      {
        authorizationStatus === AuthorizationStatus.Auth ?
          <>
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <Link to={'/'} className="user-block__link">Sign out</Link>
            </li>
          </>
          :
          <li className="user-block__item">
            <Link to={AppRoute.Login} className="user-block__link">Sign in</Link>
          </li>
      }
    </ul>
  );
}

export default LoginBlock;
