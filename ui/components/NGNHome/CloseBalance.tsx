import { View, Text, Modal, StyleSheet, Platform } from 'react-native';
import React from 'react';

import { colors } from '../../theme/design-system/colors';
import { navigate } from '../../../utils/navigation';
import { ColorSpace } from 'react-native-reanimated';
import { Button } from '../layout';
import { styles as customStyles } from '../../theme/design-system/styles';

type modalProps = {
  modalVisible: boolean;
  onRequestClose: () => void;
  closeModal: () => void;
};
export const CloseBalance = ({
  modalVisible,
  onRequestClose,
  closeModal,
}: modalProps) => {
  const { buttonContainer, buttonTitleStyle } = customStyles;
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={onRequestClose}>
        <View style={modalWrapper}>
          <Text style={modalText}>
            If you close this balance, your EUR{'\n'}account will stop working
            and your{'\n'}remaining balance will be transferred{'\n'}to your
            default wallet balance.
          </Text>
          <View style={buttonWrapper}>
            <Button
              handleOnPress={closeModal}
              //@ts-expect-error
              containerStyle={[
                buttonContainer,
                { backgroundColor: colors.blue, width: '45%' },
              ]}
              titleStyle={buttonTitleStyle}
              title="Cancel"
            />
            <Button
              handleOnPress={closeModal}
              //@ts-expect-error
              containerStyle={[
                buttonContainer,
                { backgroundColor: colors.darkGrey, width: '45%' },
              ]}
              titleStyle={buttonTitleStyle}
              title="Yes, Close"
            />
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
    height: 250,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonWrapper: {
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalText: {
    fontSize: 18,
    color: colors.light,
    textAlign: 'center',
    marginTop: 20,
    lineHeight: 24
  },
});

const { modalWrapper, buttonWrapper, modalText } = styles;
