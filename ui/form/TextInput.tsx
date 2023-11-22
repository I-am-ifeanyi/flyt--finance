import {
  View,
  Text,
  StyleSheet,
  TextInput as RxTextInput,
  KeyboardTypeOptions,
  Keyboard,
  TouchableWithoutFeedback,
  Pressable,
  TextStyle,
} from 'react-native';
import React from 'react';
import { Controller, Control } from 'react-hook-form';

import SearchIcon from '../../assets/icons/searchIcon.svg';
import HidePasswordIcon from '../../assets/icons/hidePasswordIcon.svg';
import ShowPasswordIcon from '../../assets/icons/showPasswordIcon.svg';

type Props = {
  defaultValue?: string;
  placeholder?: string;
  onSubmitEditing?: (data: any) => void;
  keyboardType?: KeyboardTypeOptions;
  editable: boolean;
  selectTextOnFocus: boolean;
  placeholderTextColor?: string;
  handleChange?: (data: any) => void;
  togglePasswordVisibility?: () => void;
  control: Control<any>;
  rules?: any;
  textInputField: string;
  errorMessage?: any;
  isPassword?: boolean;
  isDisplayPasswordIcon?: boolean;
  isHidePassword?: boolean;
  value?: any;
  searchHandleOnclick?: (data: any) => void;
  keyboardAppearance?: any;
  inputStyle?: TextStyle;
  isSearchIcon?: boolean;
  inputWrapperStyle?: TextStyle;
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
  isHidePassword,
  isDisplayPasswordIcon,
  value,
  searchHandleOnclick,
  keyboardAppearance,
  togglePasswordVisibility,
  inputStyle,
  isSearchIcon,
  inputWrapperStyle,
}: Props) {
  return (
    <TouchableWithoutFeedback>
      <Controller
        name={textInputField}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field: { onChange } }) => (
          <View>
            <View style={inputWrapperStyle}>
              {isSearchIcon && <SearchIcon />}
              <RxTextInput
                defaultValue={defaultValue}
                placeholder={placeholder}
                onChangeText={data => {
                  onChange(data);
                  handleChange?.(data);
                }}
                style={inputStyle}
                keyboardType={keyboardType}
                secureTextEntry={isPassword && !isHidePassword ? true : false}
                editable={editable}
                keyboardAppearance={keyboardAppearance}
                placeholderTextColor={'#777776'}
                value={value}
                selectTextOnFocus={selectTextOnFocus}
              />

              {isPassword && isDisplayPasswordIcon && (
                <Pressable onPress={togglePasswordVisibility}>
                  {!isHidePassword ? (
                    <HidePasswordIcon />
                  ) : (
                    <ShowPasswordIcon />
                  )}
                </Pressable>
              )}
            </View>
            {errorMessage && (
              <Text style={{ color: 'red', fontSize: 12, marginVertical: 5 }}>
                {errorMessage}
              </Text>
            )}
          </View>
        )}
      />
    </TouchableWithoutFeedback>
  );
}
