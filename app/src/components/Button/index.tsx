import React from 'react';
import {View, TouchableOpacity, ViewStyle} from 'react-native';
import Text from '../Text';
import defaultStyle from './styles';

interface ButtonProps {
  onPress: () => void;
  title: string;
  style?: ViewStyle;
}

const Button: React.FC<ButtonProps> = ({onPress, title, style}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} testID="button">
      <View style={[defaultStyle.container, style]}>
        <Text style={defaultStyle.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
