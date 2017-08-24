import * as React from 'react';
import {
  Alert,
  AlertIOS,
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

import FingerprintScanner from 'react-native-fingerprint-scanner';
import AndroidChartView from './components/AndroidChartView';

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
  errorMessage: string;
}

/**
 * Main app class. Renders the home screen with the header.
 */
export default class App extends React.PureComponent<Props, State> {

  constructor() {
    super();
    this.testCallback = this.testCallback.bind(this);
    this.state = { density: '', densityDpi: '', height: '', width: '', orientation: '', errorMessage: '' };
  }
  componentWillMount() {
    if (Platform.OS === 'android') {
      this.buildScreenSpecText();
      this.checkOrientation();
    }
  }
  componentDidMount() {
    /*
    if (Platform.OS === 'android') {
      FingerprintScanner
      .authenticate({ onAttempt: this.handleAuthenticationAttempted })
      .then(() => {
        Alert.alert('Fingerprint Authentication', 'Authenticated successfully');
      })
      .catch((error) => {
        this.setState({ errorMessage: error.message });
      });
    } else {
      FingerprintScanner
      .authenticate({ description: 'Scan your fingerprint on the device scanner to continue' })
      .then(() => {
        AlertIOS.alert('Authenticated successfully');
      })
      .catch((error) => {
        AlertIOS.alert(error.message);
      });
    }
    */
  }
  componentWillUnmount() {
    /*
    if (Platform.OS === 'android') {
      FingerprintScanner.release();
    }
    */
  }
  handleAuthenticationAttempted = (error) => {
    this.setState({ errorMessage: error.message });
  };
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
    const { density, densityDpi, height, width } = this.state;
    const { orientation } = this.state;

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Header title='InboxApp' avatar='G' />
          <AndroidChartView backgroundColour={0xFF000000} chartColour={0xFFFFFF0} />
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
