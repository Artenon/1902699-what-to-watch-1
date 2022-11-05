import { Routes, Route } from 'react-router-dom';
import HistoryRouter from '../historyRouter/historyRouter';
import { browserHistory } from '../../browserHistory';
import { useAppSelector } from '../../hooks';
import MainContent from '../../pages/mainContent/mainContent';
import NotFound from '../../pages/notFound/notFound';
import SignIn from '../../pages/signIn/signIn';
import MyList from '../../pages/myList/myList';
import MoviePage from '../../pages/moviePage/moviePage';
import AddReview from '../../pages/addReview/addReview';
import Player from '../../pages/player/player';
import PrivateRoute from '../privateRoute/privateRoute';
import { AppRoute } from '../../const';
import ScrollToTop from '../scrollToTop/scrollToTop';
import { AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import LoadingScreen from '../../pages/loadingScreen/loadingScreen';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <LoadingScreen />;
  }

  return (
    <HistoryRouter history={browserHistory}>
      <ScrollToTop />
      <Routes>
        <Route path='/'>
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
            <Route path={`:filmId${AppRoute.Review}`} element={ <AddReview /> } />
          </Route>
          <Route path={AppRoute.Player}>
            <Route path=':filmId' element={ <Player /> } />
          </Route>
        </Route>
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
