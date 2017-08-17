import * as React from 'react';
import { Text, View } from 'react-native';
import 'isomorphic-fetch';
import * as sinon from 'sinon';
import * as renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import mockStore from '../test/MockStore';
import realStore from '../store';
import HomeScreen from './HomeScreen';
import { User, Message, HomeState } from '../types';
import * as constants from '../constants';
import { fetchUser, fetchMessages } from '../test/MockActions';

const initialState = {user: null, messages: null};
const mockStoreObj = mockStore(initialState);
const expectedActions = [ { type: constants.REQUEST_USER } ];

describe('Home tests', () => {

  beforeEach(() => {
    // Clear the actions before each test
    mockStoreObj.clearActions();
  });

  it('invokes componentDidMount upon mount', () => {
    sinon.spy(HomeScreen.prototype, 'componentDidMount');
    const screen = renderer.create(<Provider store={mockStoreObj}><HomeScreen /></Provider>);
    expect(HomeScreen.prototype.componentDidMount.calledOnce).toEqual(true);
    expect(mockStoreObj.getActions()).toEqual(expectedActions);
    expect(mockStoreObj.getState()).toEqual(initialState);
  });

  it('invoking fetchUser correctly adds to actions', () => {
    const screen = renderer.create(<Provider store={mockStoreObj}><HomeScreen /></Provider>);
    expect(fetchUser).not.toHaveBeenCalled();
    mockStoreObj.dispatch(fetchUser());
    expect(fetchUser).toHaveBeenCalled();
    expect(mockStoreObj.getActions().length).toEqual(2);
  });

  it('renders the screen correctly', () => {
    const screen = renderer.create(<Provider store={realStore}><HomeScreen /></Provider>);
    const screenJson = screen.toJSON();
    expect(screenJson.children).not.toBeNull;
    if (screenJson.children && screenJson.children.length) {
      expect(screenJson.children.length).toEqual(2);
    }
  });
});
