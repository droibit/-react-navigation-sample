import React, {
  Component,
} from "react";
import {
  TouchableOpacity,
  Text,
  Button,
  View,
  StyleSheet,
  NativeSyntheticEvent,
  NativeTouchEvent
} from "react-native";
import { Action, Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { connect } from 'react-redux';
import * as Actions from "../module/actions";
import { 
  NavigationStackScreenOptions,
  NavigationScreenProp,
 } from "react-navigation";
import { SCREEN_HOME, SCREEN_APP } from ".";

type Props = {
  navigation: NavigationScreenProp<any>,
};

class LoginScreen extends Component<Props> {

  static navigationOptions: NavigationStackScreenOptions = {
    title: "Login",
    // headerTitle: "Hoge"
  };

  constructor(props: Props) {
    super(props);
    console.log(`LoginScreen: ${JSON.stringify(props)}`);
  }

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>LOGIN!!!</Text>
        <Button 
          title="Login"
          onPress={() => this.props.navigation.navigate(SCREEN_APP)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

// const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, Action>, props: Props) => {
//   return {
//     nextScreen: () => {
//       console.log("dispatch: login");
//       dispatch(Actions.login())
//     },
//   }
// };

export default connect()(LoginScreen);