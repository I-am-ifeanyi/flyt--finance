import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Pressable,
  Platform,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { navigate } from '../../../utils/navigation';
import { useToast } from '../../../hooks/useToast';
import { userData } from './state/userDataState';
import { Box } from '../../../ui/components/layout';
import { colors } from '../../../ui/theme/design-system/colors';
import TextInput from '../../../ui/form/TextInput';
import { PinLoginModal } from '../../../ui/components/auth/PinLoginModal';

import ScanIcon from '../../../assets/icons/scanIcon.svg';
import LeftIcon from '../../../assets/icons/leftIcon.svg';
import QuestionIcon from '../../../assets/icons/questionIcon.svg';

export function PinLogin() {
  const { loginPin } = userData();
  const {
    control,
    watch,
    handleSubmit,
    reset,
    getFieldState,
    formState: { errors },
  } = useForm();
  const toast = useToast();
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
      if (enteredPinNumber === loginPin) {
        toast.success({ title: 'Login', message: 'Logged in successfully' });
        navigate('NigerianWalletStack');
      } else {
        toast.error({
          title: 'Login',
          message: 'Pin incorrect. Please try again',
        });
        setPin0Value(undefined);
        setPin1Value(undefined);
        setPin2Value(undefined);
        setPin3Value(undefined);
      }
    }
  }, [pin3Value]);

  const deletePin = () => {
    if (pin3Value) {
      setPin3Value(undefined);
    } else if (pin2Value) {
      setPin2Value(undefined);
    } else if (pin1Value) {
      setPin1Value(undefined);
    } else setPin0Value(undefined);
  };

  const generateInputStyle = (pinValue: number | undefined) => ({
    backgroundColor: pinValue ? colors.blue : colors.grey,
    borderRadius: 100,
    width: 20,
    height: 20,
  });

  const inputStyle0 = generateInputStyle(pin0Value);
  const inputStyle1 = generateInputStyle(pin1Value);
  const inputStyle2 = generateInputStyle(pin2Value);
  const inputStyle3 = generateInputStyle(pin3Value);

  return (
    <Box>
      <View style={{ padding: 10, flex: 1, justifyContent: 'space-between' }}>
        <View>
          <Pressable
            style={{ marginLeft: 'auto', marginBottom: 20 }}
            onPress={() => setModalVisible(true)}>
            <QuestionIcon />
          </Pressable>

          <View>
            <Text style={textStyle}>Welcome back Ifeanyi</Text>
            <Text style={textStyle}>Enter your PIN</Text>
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
      <PinLoginModal
        modalVisible={modalVisible}
        closeModal={() => setModalVisible(false)}
        onRequestClose={() => setModalVisible(!modalVisible)}
      />
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
