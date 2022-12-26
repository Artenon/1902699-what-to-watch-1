import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import FilmCard from './film-card';

const history = createMemoryHistory();

describe('Component: FilmCard', () => {
  it('Should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <FilmCard
          name='name'
          previewImage='test.jpg'
          id={0}
          previewVideoLink='test.mp4'
        />
      </HistoryRouter>
    );

    expect(screen.getByTestId('film_card')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
