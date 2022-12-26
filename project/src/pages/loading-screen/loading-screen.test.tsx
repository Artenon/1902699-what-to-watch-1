import { render, screen } from '@testing-library/react';
import LoadingScreen from './loading-screen';

describe('Component: LoadingScreen', () => {
  it('Should render correctly', () => {
    render(
      <LoadingScreen />
    );

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });
});
