import * as React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Button,
  Text
} from 'react-native';
import HomeScreen from './containers/HomeScreen';
import { User, Message } from './types';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './store';
import ToastAndroidNativeModule from './components/ToastNativeAndroid';
import UIAndroidNativeModule from './components/UIAndroidNativeModule';

/**
 * PropTypes definition for the App
 */
export interface Props {

}

/**
 * State type definition for the App
 */
export interface State {
  density: string;
  densityDpi: string;
  height: string;
  width: string;
  orientation: string;
}

/**
 * Main app class. Renders the home screen with the header.
 */
export default class App extends React.PureComponent<Props, State> {

  constructor() {
    super();
    this.testCallback = this.testCallback.bind(this);
    this.state = { density: '', densityDpi: '', height: '', width: '', orientation: '' };
  }
  componentWillMount() {
    this.buildScreenSpecText();
    this.checkOrientation();
  }

  buildScreenSpecText = () => {
    if (Platform.OS === 'android') {
      UIAndroidNativeModule.getScreenSize(this.testCallback);
    }
  }

  checkOrientation = () => {
    UIAndroidNativeModule.getConfiguration().then((orientation: string) => {
      this.setState({ orientation });
    });
  }

  testCallback(density: string, densityDpi: string, height: string, width: string) {
    this.setState({ density, densityDpi, height, width });
  }

  /**
   * Render the app with the header and home screen
   */
  render(): JSX.Element {
    const { density, densityDpi } = this.state;
    const { height } = this.state;
    const { width } = this.state;
    const { orientation } = this.state;

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Header title='InboxApp' avatar='G' />
          {Platform.OS === 'android' && <Text>>Native UI density: {density} dpi: {densityDpi} height: {height} width: {width}</Text>}
          {Platform.OS === 'android' && <Text>>Orientation: {orientation}</Text>}
          <HomeScreen />
          {Platform.OS === 'android' && <Button title='show me' onPress={() => ToastAndroidNativeModule.showMe()} />}
          {Platform.OS === 'android' && <Button title='show toast' onPress={() => ToastAndroidNativeModule.showToast('Hello toast', ToastAndroidNativeModule.LONG)} />}
        </View>
      </Provider>
    );
  }
}


/**
 * Default styles
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    paddingTop: (Platform.OS === 'ios' ? 20 : 0)
  }
});
