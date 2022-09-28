import MainContent from '../../pages/mainContent/mainContent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from '../notFound/notFound';
import SignIn from '../../pages/signIn/signIn';
import MyList from '../../pages/myList/myList';
import MoviePage from '../../pages/moviePage/moviePage';
import AddReview from '../../pages/addReview/addReview';
import Player from '../../pages/player/player';
import PrivateRoute from '../privateRoute/privateRoute';

type AppProps = {
  data: {
    name: string,
    genre: string,
    year: number
  }
}

function App({data} : AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={
            <MainContent
              name={data.name}
              genre={data.genre}
              year={data.year}
            />
          }
          />
          <Route path='login' element={ <SignIn /> } />
          <Route path='mylist' element={
            <PrivateRoute isAuthorized={false}>
              <MyList />
            </PrivateRoute>
          }
          />
          <Route path='films/'>
            <Route path=':id' element={ <MoviePage /> } />
            <Route path=':id/review' element={ <AddReview /> } />
          </Route>
          <Route path='player/'>
            <Route path=':id' element={ <Player /> } />
          </Route>
        </Route>
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
