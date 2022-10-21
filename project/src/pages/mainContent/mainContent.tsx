import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import PromoFilmCard from '../../components/promoFilmCard/promoFilmCard';
import ListOfFilms from '../../components/listOfFilms/listOfFilms';
import Logo from '../../components/logo/logo';
import ListOfGenres from '../../components/listOfGenres/ListOfGenres';
import ShowMoreButton from '../../components/showMoreButton/showMoreButton';

function MainContent(): JSX.Element | null {
  const [numberOfFilms, setNumberOfFilms] = useState(8);
  const {genre, listOfFilms, promoFilm} = useAppSelector((state) => state);

  if (!promoFilm) {
    return null;
  }

  const {backgroundImage, name} = promoFilm;
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo isLinkLight={false} />

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <PromoFilmCard
          film={promoFilm}
        />
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ListOfGenres currentGenre={genre} onSetNumberOfFilms={setNumberOfFilms} />

          <div className="catalog__films-list">
            <ListOfFilms films={listOfFilms.slice(0, numberOfFilms)} />
          </div>

          {
            listOfFilms.length > numberOfFilms && <ShowMoreButton onSetNumberOfFilms={setNumberOfFilms} />
          }
        </section>

        <footer className="page-footer">
          <Logo isLinkLight />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MainContent;
