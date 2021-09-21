import React from 'react';
import {View, TextInput, ViewStyle} from 'react-native';
import defaultStyle from './styles';

type InputProps = {
  value: string;
  placeholder: string;
  onChange: (v: string) => void;
  style?: ViewStyle;
};

const Input: React.FC<InputProps> = ({value, placeholder, onChange, style}) => {
  return (
    <View style={[defaultStyle.container, style]}>
      <TextInput
        value={value}
        placeholder={placeholder}
        placeholderTextColor={'#808080'}
        style={defaultStyle.text}
        onChangeText={v => onChange(v)}
        clearButtonMode="always"
        testID="text-input"
      />
    </View>
  );
};

export default Input;
