import FilmCard from '../filmCard/filmCard';
import { Film } from '../../types/films';
import { useState } from 'react';

type ListOfFilmsProps = {
  films: Film[]
}

function ListOfFilms({films}: ListOfFilmsProps): JSX.Element {
  const [activeFilmId, setActiveFilmId] = useState(0);

  // eslint-disable-next-line no-console
  console.log(activeFilmId);

  const onMouseOver = (id: number) => {
    setActiveFilmId(id);
  };

  return (
    <>
      {
        films.map((film: Film): JSX.Element => (
          <FilmCard
            key={film.id}
            name={film.name}
            previewImage={film.previewImage}
            id={film.id}
            onMouseOver={onMouseOver}
          />
        ))
      }
    </>
  );
}

export default ListOfFilms;
