import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../../components/historyRouter/historyRouter';
import LoadingScreen from './loadingScreen';

describe('Component: LoadingScreen', () => {
  it('Should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <LoadingScreen />
      </HistoryRouter>
    );

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });
});
