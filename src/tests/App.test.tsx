import { screen } from '@testing-library/dom';
import App from '../App';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import NewsProvider from '../context/NewsProvider';
import { render } from 'react-dom';

describe('Verifica o funcionamento da página', () => {
  beforeEach(() => {
    render(
      <NewsProvider>
        <App />
      </NewsProvider>
    );
  });
});
