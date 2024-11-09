import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { UserProvider } from './context/UserContext';
import { Provider } from 'react-redux';
import store from './store/store';

describe('App routing', () => {
  
  test('renders HomePage when navigating to "/"', () => {
    render(
      <Provider store={store}>
        <UserProvider>
          <MemoryRouter initialEntries={['/']}>
            <App />
          </MemoryRouter>
        </UserProvider>
      </Provider>
    );
    // Get all elements with the text "Home" and find the <h1> element
    const homeHeading = screen.getAllByText(/Home/i).find(element => element.tagName === 'H1');
    expect(homeHeading).toBeInTheDocument();
  });

});
