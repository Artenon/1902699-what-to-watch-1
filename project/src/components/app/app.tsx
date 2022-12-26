import { Routes, Route } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import MainContent from '../../pages/main-content/main-content';
import NotFound from '../../pages/not-found/not-found';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import PrivateRoute from '../private-route/private-route';
import { AppRoute } from '../../const';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import { AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { getMyList } from '../../store/api-actions';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <LoadingScreen />;
  }

  if (authorizationStatus === AuthorizationStatus.Auth) {
    dispatch(getMyList());
  }

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path={AppRoute.Main}>
          <Route index element={
            <MainContent />
          }
          />
          <Route path={AppRoute.Login} element={ <SignIn /> } />
          <Route path={AppRoute.MyList} element={
            <PrivateRoute>
              <MyList />
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.Films}>
            <Route path=':filmId' element={ <MoviePage /> } />
            <Route path={`:filmId${AppRoute.Review}`} element={
              <PrivateRoute>
                <AddReview />
              </PrivateRoute>
            }
            />
          </Route>
          <Route path={AppRoute.Player}>
            <Route path=':filmId' element={ <Player /> } />
          </Route>
        </Route>
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </>
  );
}

export default App;
