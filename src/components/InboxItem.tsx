import * as React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  Animated,
  View
} from 'react-native';

/**
 * PropTypes definition
 */
export interface Props {
  /**
   * Id
   */
  id: number;

  /**
   * Message title
   */
  title: string;

  /**
   * Body
   */
  body?: string;

  /**
   * Sender avatar url
   */
  avatar: string;
}

/**
 * State definition
 */
export interface State {
  fadeAnim: Animated.Value;
}


/**
 * Inbox item component. Maps directly to a single inbox message
 */
export default class InboxItem extends React.PureComponent<Props, State> {

  constructor() {
    super();
    this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }

  cycleAnimation = () => {
    Animated.sequence([
      Animated.timing(                  // Animate over time
        this.state.fadeAnim,            // The animated value to drive
        {
          toValue: 1,                   // Animate to opacity: 1 (opaque)
          duration: 700,              // Make it take a while
        }
      ),
      Animated.timing(                  // Animate over time
        this.state.fadeAnim,            // The animated value to drive
        {
          toValue: 0,                   // Animate to opacity: 1 (opaque)
          duration: 700,              // Make it take a while
        }
      )
    ]).start((event) => {
      if (event.finished) {
        if (this.props.title === '===================') {
          this.cycleAnimation();
        } else {
          this.setState({fadeAnim: new Animated.Value(1)});
        }
      }
    });
  }

  componentDidMount() {
    this.cycleAnimation();
  }

  /**
   * Renders the title, body and avatar from the message
   */
  render(): JSX.Element {
    const { title, body, avatar } = this.props;
    const { fadeAnim } = this.state;
    const isLoading = title === '===================';
    const avatarImg = avatar === '' ? require('../../assets/images/gray.png') : require('../../assets/images/1.jpg');
    return (
      <View style={styles.container}>
        <View style={{width: 100}}>
          <Image source={avatarImg} style={{width: 80, resizeMode: 'contain', height: 80}} />
        </View>
        <View style={{paddingTop: 15}}>
          {isLoading && <Animated.View style={{width: 150, height: 20, backgroundColor: '#D9E1E2', opacity: fadeAnim}}></Animated.View>}
          {isLoading && <Animated.View style={{marginTop: 10, width: 200, height: 20, backgroundColor: '#D9E1E2', opacity: fadeAnim}}></Animated.View>}
          {!isLoading && <Text style={{fontSize: 20, color: '#0099FF'}}>{title}</Text>}
          {!isLoading && <Text style={{fontSize: 16, color: '#333F48'}}>{body}</Text>}
        </View>
      </View>
    );
  }
}

/**
 * Default styles
 */
const styles = StyleSheet.create({
  container: {
    borderColor: '#EEE',
    borderWidth: 1,
    padding: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});
