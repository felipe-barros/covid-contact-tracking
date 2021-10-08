import React from 'react';
import {View} from 'react-native';
import {StackProps} from '../../navigation/MainNavigator';
import styles from './styles';

const Onboarding: React.FC<StackProps<'Home'>> = ({navigation}) => {
  return <View style={styles} />;
};

export default Onboarding;
