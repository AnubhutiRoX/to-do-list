import Enzyme, {shallow} from 'enzyme';
import App from './App';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

it('renders learn react link', () => {
  const app = shallow(<App />);
  expect(app.find('div').length).toEqual(1);
});
