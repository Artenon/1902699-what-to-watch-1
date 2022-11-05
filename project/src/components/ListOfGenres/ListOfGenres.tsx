import { Dispatch, SetStateAction } from 'react';
import { GenresObj, Genre } from '../../const';
import { NUMBER_OF_FILMS } from '../../const';

type ListOfGenresProps = {
  currentGenre: Genre;
  onSetNumberOfFilms: Dispatch<SetStateAction<number>>;
}

function ListOfGenres({currentGenre, onSetNumberOfFilms}: ListOfGenresProps): JSX.Element {
  const namesOfGenres = Object.keys(GenresObj);
  const genres = Object.values(GenresObj);
  return (
    <ul className="catalog__genres-list">
      {
        namesOfGenres.map((name, index) => (
          <li
            key={`${name}`}
            className={`catalog__genres-item ${currentGenre === genres[index] && 'catalog__genres-item--active'}`}
          >
            <div
              className="catalog__genres-link"
              style={{cursor: 'pointer'}}
              onClick={() => {
                onSetNumberOfFilms(NUMBER_OF_FILMS);
              }}
            >
              {name}
            </div>
          </li>
        ))
      }
    </ul>
  );
}

export default ListOfGenres;
