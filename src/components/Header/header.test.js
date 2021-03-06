import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';

configure({ adapter: new Adapter() });

describe('Header', () => {
    it('Should render', () => {
        const header = shallow(<Header />);
        expect(header.find('header').length).toEqual(1);
    });
});
