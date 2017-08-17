import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList
} from 'react-native';
import InboxItem from '../components/InboxItem';

import { User, Message, HomeState } from '../types';
import { HomeScreenAction, fetchUser, fetchMessages } from '../actions';
import { connect, Dispatch } from 'react-redux';
import * as constants from '../constants';

/**
 * Width and height of the app window
 */
let {width, height} = Dimensions.get('window');

/**
 * PropTypes definition
 */
export interface Props {
  /**
   * App user
   */
  user: User;

  /**
   * List of messages
   */
  messages: Message[];

  /**
   * Redux dispatch method
   */
  dispatch: Dispatch<HomeState>;
}

/**
 * State definition
 */
export interface State {

}

/**
 * Home screen
 */
export class HomeScreen extends React.PureComponent<Props, State> {

  /**
   * Fetch the user and messages after mount
   */
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchUser());
    setTimeout(() => {
      dispatch(fetchMessages());
    }, 5000);
  }

  /**
   * Helper method to render a message as a FlatList item
   */
  _renderItem = (metadata: any) => {
    const item = metadata.item as Message;
    return (<InboxItem id={item.id} title={item.title} body={item.body} avatar={item.sender} />);
  }

  /**
   * Helper method to extract the unique key from a message
   */
  _keyExtractor = (item: any, index: Number) => {
    return item.id;
  }

  /**
   * Renders the home screen
   */
  render(): JSX.Element {
    let { user, messages } = this.props;
    if (!user) {
      user = { id: -1, fullName: '            ', avatar: '  ' } as User;
    }
    if (!messages) {
      const dummyMessages = [];
      for (let i = 0; i < 10; i++) {
        let dummyMessageTpl = {id: i, sender: '', title: '===================', body: '=====================', sent: '', received: ''} as Message;
        dummyMessages.push(dummyMessageTpl);
      }
      messages = dummyMessages;
    }
    return (
      <View style={styles.container}>
        <View style={styles.welcomeMessage}><Text style={{fontSize: 20, fontWeight: 'bold'}}>Welcome {user!.fullName}</Text></View>
        <View style={styles.messages}>
          <FlatList data={messages as Message[]} renderItem={this._renderItem} keyExtractor={this._keyExtractor} />
        </View>
      </View>
    );
  }
}

/**
 * Default style
 */
const styles = StyleSheet.create({
  /**
   * Container style
   */
  container: {
    padding: 15
  },
  /**
   * Welcome message
   */
  welcomeMessage: {
  },
  /**
   * List of messages
   */
  messages: {
    paddingTop: 10,
    paddingBottom: 10,
    maxHeight: (height - 220)
  }
});

export function mapStateToProps(allState: any): HomeState {
  const { userState, messagesState } = allState;
  const newState = {
    user: userState ? userState.user : constants.DEFAULT_USER,
    messages: messagesState ? messagesState.messages : []
  };
  return newState;
}

export default connect(mapStateToProps)(HomeScreen);
