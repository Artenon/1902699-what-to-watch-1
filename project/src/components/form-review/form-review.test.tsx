import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';
import FormReview from './form-review';

const mockStore = configureMockStore();
const history = createMemoryHistory();

const TestApp = (
  <HistoryRouter history={history}>
    <Provider store={mockStore()}>
      <FormReview />
    </Provider>
  </HistoryRouter>
);

describe('Component: FormReview', () => {
  it('Should render correctly', () => {
    render(TestApp);

    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByRole('button').textContent).toEqual('Post');
    expect(screen.getAllByRole('radio')).toHaveLength(10);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('Should be reacting corect to user actions', async () => {
    render(TestApp);

    await userEvent.type(screen.getByRole('textbox'), 'Test comment');
    expect(screen.getByDisplayValue('Test comment')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();

    const text50 = 'Lorem ipsum dolor sit amet consectetur';
    await userEvent.type(screen.getByRole('textbox'), text50);
    expect(screen.getByRole('button')).toBeEnabled();

    await userEvent.click(screen.getByLabelText('Rating 5'));
    expect(screen.getByLabelText('Rating 5')).toBeChecked();
  });
});
