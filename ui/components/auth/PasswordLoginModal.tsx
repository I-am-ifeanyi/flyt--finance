import { View, Text, Modal, StyleSheet, Platform } from 'react-native';
import React from 'react';

import { colors } from '../../theme/design-system/colors';
import { navigate } from '../../../utils/navigation';

type modalProps = {
  modalVisible: boolean;
  onRequestClose: () => void;
  closeModal: () => void;
};
export const PasswordLoginModal = ({
  modalVisible,
  onRequestClose,
  closeModal,
}: modalProps) => {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={onRequestClose}>
        <View style={modalWrapper}>
          <View style={modalTextWrapper}>
            <View
              style={{
                width: 30,
                height: 4,
                backgroundColor: colors.darkGrey,
                position: 'absolute',
                top: 8,
              }}></View>
            <Text
              style={modalText}
              onPress={() => {
                navigate('PasswordLandingScreen');
                closeModal();
              }}>
              Forgot Password
            </Text>
          </View>
          <View style={modalTextWrapper}>
            <Text style={modalText} onPress={closeModal}>
              Close
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalWrapper: {
    backgroundColor: colors.darker,
    marginTop: 'auto',
    height: 200,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalTextWrapper: {
    height: 100,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: Platform.OS === 'ios' ? 0.2 : 1,
    borderColor: colors.darkGrey,
    paddingHorizontal: 5,
  },
  modalText: {
    color: colors.light,
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    width: '100%',
  },
});

const { modalWrapper, modalTextWrapper, modalText } = styles;
