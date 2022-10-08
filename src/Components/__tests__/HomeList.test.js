import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import HomeList from '../HomeList';
import store from '../../Redux/configureStore';

it('Test HomeList renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <HomeList />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
