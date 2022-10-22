import renderer from 'react-test-renderer';
import Forexcontainer from './mock/container';

describe('Currency display container', () => {
  it('Confirm that the currency display renders correctly', () => {
    const tree = renderer.create(<Forexcontainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
