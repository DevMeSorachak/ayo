import 'react-native-gesture-handler';
import { LogBox } from 'react-native';
import React from 'react';
import Navigator from './src/navigators';
LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
],["The action 'GO_BACK' was not handled by any navigator."]);
export default () => <Navigator/>;