// import React from 'react';
import renderer from 'react-test-renderer';
import TopNav from '../topNav/TopNav';

it('***Renders Correctly***', () => {
    const topNavigation = renderer.create(<TopNav/>).toJSON();

    expect(topNavigation).toMatchSnapshot();
})