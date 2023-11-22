import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { navigate } from '../../../../utils/navigation';
import { userData } from '../state/userDataState';
import { useToast } from '../../../../hooks/useToast';
import { Box } from '../../../../ui/components/layout';
import { colors } from '../../../../ui/theme/design-system/colors';
import TextInput from '../../../../ui/form/TextInput';
import LeftIcon from '../../../../assets/icons/leftIcon.svg';
import ScanIcon from '../../../../assets/icons/scanIcon.svg';

type IdentityInputs = {
  userName: string;
  email: string;
  password: string;
};
export function VerifyNewPin() {
  const { loginPin } = userData();
  const {
    control,
    watch,
    handleSubmit,
    reset,
    getFieldState,
    formState: { errors },
  } = useForm<IdentityInputs>();
  const { error, success } = useToast();
  const USER_PIN = 1974;
  const customNumericKeyboard = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    <ScanIcon />,
    0,
    <LeftIcon />,
  ];

  const keysLessThanThree = customNumericKeyboard.filter(
    (item, index) => index < 3,
  );
  const keysLessThanSix = customNumericKeyboard.filter(
    (item, index) => index < 6 && index > 2,
  );
  const keysLessThanNine = customNumericKeyboard.filter(
    (item, index) => index < 9 && index > 5,
  );
  const keysGreaterThanNine = customNumericKeyboard.filter(
    (item, index) => index > 8,
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [pin0Value, setPin0Value] = useState<number | undefined>(undefined);
  const [pin1Value, setPin1Value] = useState<number | undefined>(undefined);
  const [pin2Value, setPin2Value] = useState<number | undefined>(undefined);
  const [pin3Value, setPin3Value] = useState<number | undefined>(undefined);
  const setPin = (item: any) => {
    if (!pin0Value) {
      setPin0Value(item);
    } else if (!pin1Value) {
      setPin1Value(item);
    } else if (!pin2Value) {
      setPin2Value(item);
    } else if (!pin3Value) {
      setPin3Value(item);
    }
  };

  useEffect(() => {
    const enteredPin = [pin0Value, pin1Value, pin2Value, pin3Value];
    const enteredPinNumber = parseInt(enteredPin.join(''), 10);
    if (pin3Value) {
      if (loginPin === enteredPinNumber) {
        success({ title: 'Success', message: 'Your PIN reset is successful!' });
      } else {
        error({ title: 'Error', message: 'PIN not a match, please try again' });
        setPin0Value(undefined);
        setPin1Value(undefined);
        setPin2Value(undefined);
        setPin3Value(undefined);
      }
    }
  }, [pin3Value]);
  console.log(loginPin);
  const deletePin = () => {
    if (pin3Value) {
      setPin3Value(undefined);
    } else if (pin2Value) {
      setPin2Value(undefined);
    } else if (pin1Value) {
      setPin1Value(undefined);
    } else setPin0Value(undefined);
  };

  const inputStyle0 = {
    backgroundColor: !pin0Value ? colors.grey : colors.blue,
    borderRadius: 100,
    width: 20,
    height: 20,
  };
  const inputStyle1 = {
    backgroundColor: !pin1Value ? colors.grey : colors.blue,
    borderRadius: 100,
    width: 20,
    height: 20,
  };
  const inputStyle2 = {
    backgroundColor: !pin2Value ? colors.grey : colors.blue,
    borderRadius: 100,
    width: 20,
    height: 20,
  };
  const inputStyle3 = {
    backgroundColor: !pin3Value ? colors.grey : colors.blue,
    borderRadius: 100,
    width: 20,
    height: 20,
  };

  return (
    <Box>
      <View style={{ padding: 10, flex: 1, justifyContent: 'space-between' }}>
        <View>
          <TouchableOpacity onPress={() => navigate("CreateNewPin")}>
            <LeftIcon />
          </TouchableOpacity>

          <View style={{ marginTop: 40 }}>
            <Text style={textStyle}>Verify your account PIN</Text>
            <Text style={{ fontSize: 16, color: colors.grey, marginTop: 5 }}>
              Enter your new PIN again
            </Text>
          </View>
          <View style={inputContainer}>
            <TextInput
              textInputField={'pin0'}
              selectTextOnFocus={true}
              editable={true}
              handleChange={data => setPin0Value(data)}
              control={control}
              isPassword={true}
              inputStyle={inputStyle0}
              value={pin0Value}
              isDisplayPasswordIcon={false}
            />
            <TextInput
              textInputField={'pin1'}
              selectTextOnFocus={true}
              editable={true}
              handleChange={data => setPin1Value(data)}
              control={control}
              isPassword={true}
              inputStyle={inputStyle1}
              value={pin1Value}
              isDisplayPasswordIcon={false}
            />
            <TextInput
              textInputField={'pin2'}
              selectTextOnFocus={true}
              editable={true}
              handleChange={data => setPin2Value(data)}
              control={control}
              isPassword={true}
              inputStyle={inputStyle2}
              value={pin2Value}
              isDisplayPasswordIcon={false}
            />
            <TextInput
              textInputField={'pin3'}
              selectTextOnFocus={true}
              editable={true}
              handleChange={data => setPin3Value(data)}
              control={control}
              isPassword={true}
              inputStyle={inputStyle3}
              value={pin3Value}
              isDisplayPasswordIcon={false}
            />
          </View>
        </View>
        <View>
          <View style={customKeyboardContainer}>
            <View style={keyboardRow}>
              {keysLessThanThree.map((item, index) => (
                <TouchableOpacity
                  onPress={() => setPin(item)}
                  key={index}
                  style={rowItem}>
                  <Text style={keyboardTextStyle}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={keyboardRow}>
              {keysLessThanSix.map((item, index) => (
                <TouchableOpacity
                  onPress={() => setPin(item)}
                  key={index}
                  style={rowItem}>
                  <Text style={keyboardTextStyle}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={keyboardRow}>
              {keysLessThanNine.map((item, index) => (
                <TouchableOpacity
                  onPress={() => setPin(item)}
                  key={index}
                  style={rowItem}>
                  <Text style={keyboardTextStyle}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={keyboardRow}>
              {keysGreaterThanNine.map((item, index) => (
                <TouchableOpacity
                  onPress={() => {
                    if (index != 2 && index != 1) {
                      setPin(item);
                    } else if (index === 2) {
                      deletePin();
                    }
                  }}
                  key={index}
                  style={rowItem}>
                  <Text style={keyboardTextStyle}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </View>
    </Box>
  );
}

const styles = StyleSheet.create({
  customKeyboardContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  keyboardRow: {
    width: '100%',
    justifyContent: 'center',
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowItem: {
    width: '40%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 20,
  },
  keyboardTextStyle: { color: 'white', fontSize: 30, fontWeight: '500' },
  textStyle: { fontSize: 24, fontWeight: '500', color: colors.light },
});

const {
  customKeyboardContainer,
  keyboardRow,
  rowItem,
  keyboardTextStyle,
  textStyle,
  inputContainer,
} = styles;
