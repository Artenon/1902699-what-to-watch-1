import MainContent from '../../pages/mainContent/mainContent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from '../notFound/notFound';
import SignIn from '../../pages/signIn/signIn';
import MyList from '../../pages/myList/myList';
import MoviePage from '../../pages/moviePage/moviePage';
import AddReview from '../../pages/addReview/addReview';
import Player from '../../pages/player/player';
import PrivateRoute from '../privateRoute/privateRoute';
import { Film } from '../../types/films';
import { Promo } from '../../types/promo';

type AppProps = {
  films: Film[];
  promoFilm: Promo;
  favouriteFilms: Film[];
}

function App(props: AppProps): JSX.Element {
  const {films, promoFilm, favouriteFilms} = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={
            <MainContent
              films={films}
              promoFilm={promoFilm}
            />
          }
          />
          <Route path='login' element={ <SignIn /> } />
          <Route path='mylist' element={
            <PrivateRoute isAuthorized>
              <MyList favouriteFilms={favouriteFilms} />
            </PrivateRoute>
          }
          />
          <Route path='films/'>
            <Route path=':filmId' element={ <MoviePage films={films} /> } />
            <Route path=':filmId/review' element={ <AddReview films={films} /> } />
          </Route>
          <Route path='player/'>
            <Route path=':filmId' element={ <Player /> } />
          </Route>
        </Route>
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
