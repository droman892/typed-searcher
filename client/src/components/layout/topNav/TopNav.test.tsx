import renderer from 'react-test-renderer';
import TopNav from '../topNav/TopNav';

it('***TopNav Component Renders Correctly***', () => {
    const topNavigation = renderer.create(<TopNav/>).toJSON();

    expect(topNavigation).toMatchSnapshot();
})