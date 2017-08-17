import * as React from 'react';
import * as enzyme from 'enzyme';
import { Image } from 'react-native';
import InboxItem from './InboxItem';

describe('InboxItem tests', () => {
  it('renders the item correctly', () => {
    const item = enzyme.shallow(<InboxItem id={1} avatar='G' title='Test subject 1' />);
    expect(item.find(Image)).toHaveLength(1);
  });
});
