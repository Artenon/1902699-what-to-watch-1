import { Link } from 'react-router-dom';

type FilmCardProps = {
  name: string;
  previewImage: string;
  id: number;
  onMouseOver: (id: number) => void
}

function FilmCard(props: FilmCardProps): JSX.Element {
  const {name, previewImage, id, onMouseOver} = props;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image" onMouseOver={() => onMouseOver(id)}>
        <img src={previewImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
