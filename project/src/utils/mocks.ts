import { datatype, music, image } from 'faker';
import { Film } from '../types/film';

const getStarring = (): string[] => [datatype.string(), datatype.string(), datatype.string()];

type makeFakeFilmProps = {
  isGenreTheSame: boolean;
}

export const makeFakeFilm = ({isGenreTheSame}: makeFakeFilmProps): Film => ({
  id: datatype.number(),
  name: datatype.string(),
  posterImage: image.imageUrl(),
  previewImage: image.imageUrl(),
  backgroundImage: image.imageUrl(),
  backgroundColor: datatype.string(),
  videoLink: image.dataUri(),
  previewVideoLink: image.dataUri(),
  description: datatype.string(),
  rating: datatype.number(),
  scoresCount: datatype.number(),
  director: datatype.string(),
  starring: getStarring(),
  runTime: datatype.number(),
  genre: isGenreTheSame ? 'genre' : music.genre(),
  released: datatype.number(),
  isFavorite: datatype.boolean(),
});
