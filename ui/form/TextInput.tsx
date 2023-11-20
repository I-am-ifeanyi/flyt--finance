import {
  View,
  Text,
  StyleSheet,
  TextInput as RxTextInput,
  KeyboardTypeOptions,
  Keyboard,
  TouchableWithoutFeedback,
  TextStyle
} from 'react-native';
import React from 'react';
import { Controller, Control } from 'react-hook-form';

type Props = {
  defaultValue?: string;
  placeholder?: string;
  onSubmitEditing: (data: any) => void;
  keyboardType?: KeyboardTypeOptions;
  editable: boolean;
  selectTextOnFocus: boolean;
  placeholderTextColor?: string;
  handleChange?: (data: any) => void;
  isTogglePasswordVisibility?: boolean;
  control: Control<any>;
  rules?: any;
  textInputField: string;
  errorMessage?: string | undefined;
  isPassword?: boolean;
  value?: string | number | undefined;
  searchHandleOnclick?: (data: any) => void;
  keyboardAppearance?: any;
  inputStyle?: TextStyle
};
export default function TextInput({
  defaultValue,
  editable,
  placeholder,
  onSubmitEditing,
  keyboardType,
  selectTextOnFocus,
  placeholderTextColor,
  handleChange,
  control,
  rules,
  textInputField,
  errorMessage,
  isPassword,
  value,
  searchHandleOnclick,
  keyboardAppearance,
  isTogglePasswordVisibility,
  inputStyle
}: Props) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Controller
        name={textInputField}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field: { onChange } }) => (
          <View>
            <RxTextInput
              defaultValue={defaultValue}
              placeholder={placeholder}
              onChangeText={data => {
                onChange(data);
                handleChange?.(data);
              }}
              style={inputStyle}
              keyboardType={keyboardType}
              secureTextEntry={isPassword ? true : false}
              editable={editable}
              keyboardAppearance={keyboardAppearance}
            />
          </View>
        )}
      />
    </TouchableWithoutFeedback>
  );
}
