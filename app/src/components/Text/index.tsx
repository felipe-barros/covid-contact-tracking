import React from 'react';
import {Text, TextProps} from 'react-native';
import styles from './styles';

const pText: React.FC<TextProps> = ({children, style, ...rest}) => {
  return (
    <Text style={[styles.container, style]} {...rest}>
      {children}
    </Text>
  );
};

export default pText;
