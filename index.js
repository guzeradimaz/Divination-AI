import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Router} from './src/screens/Router';

AppRegistry.registerComponent(appName, () => Router);
