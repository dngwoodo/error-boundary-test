import App from './App';
import { render } from './test/utils';

describe('App', () => {
  it('doesn\'t crush', () => {
    render(<App />);
  });
});
