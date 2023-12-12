import {
  View,
  Text,
  Modal,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';
import * as Clipboard from 'expo-clipboard';

import { colors } from '../../theme/design-system/colors';
import { navigate } from '../../../utils/navigation';
import { userData } from '../../../screens/onboarding/auth/state/userDataState';
import { useToast } from '../../../hooks/useToast';

type modalProps = {
  modalVisible: boolean;
  onRequestClose: () => void;
  closeModal: () => void;
};
export const AddMoneyModal = ({
  modalVisible,
  onRequestClose,
  closeModal,
}: modalProps) => {
  const {
    currencyWallet,
    legalInfo: { firstName, lastName },
  } = userData();
  const { success } = useToast();

  const copyToClipboard = async (data: string) => {
    await Clipboard.setStringAsync(data);
    success({ title: 'Copied', message: 'Successfully copied to clipboard' });
  };

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
                alignSelf: 'center',
              }}></View>
            <Text style={[modalMainText, { textAlign: 'center' }]}>
              {currencyWallet} Account Details
            </Text>
          </View>

          <View style={modalTextWrapper}>
            <Text style={subText}>Account Name</Text>
            <Text style={modalMainText}>
              {firstName} {lastName}
            </Text>
          </View>
          <View
            style={[
              modalTextWrapper,
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              },
            ]}>
            <View>
              <Text style={subText}>Account Number</Text>
              <Text style={modalMainText}>0023443422</Text>
            </View>
            <TouchableOpacity
              style={copyStyle}
              onPress={() => copyToClipboard('0023443422')}>
              <Text style={[modalMainText, { textAlign: 'center' }]}>Copy</Text>
            </TouchableOpacity>
          </View>
          <View style={modalTextWrapper}>
            <Text style={subText}>Bank Name</Text>
            <Text style={modalMainText}>Hope Microfinance Bank</Text>
          </View>
          <View style={modalTextWrapper}>
            <Text
              style={[modalMainText, { textAlign: 'center' }]}
              onPress={() => {
                closeModal();
                setTimeout(() => {
                  navigate('NigerianWalletStack', { screen: 'AddAmount' });
                }, 300);
              }}>
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
    height: 420,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    alignItems: 'center',
  },
  modalTextWrapper: {
    height: 85,
    width: '100%',
    justifyContent: 'center',
    borderBottomWidth: Platform.OS === 'ios' ? 0.2 : 1,
    borderColor: colors.darkGrey,
    paddingHorizontal: 20,
  },
  modalMainText: {
    color: colors.light,
    fontSize: 20,
    fontWeight: '500',
    width: '100%',
  },
  subText: {
    fontSize: 14,
    color: colors.grey,
    marginBottom: 10,
  },
  copyStyle: {
    padding: 5,
    backgroundColor: colors.darkGrey,
    width: 80,
    height: 40,
    borderRadius: 18,
  },
});

const { modalWrapper, modalTextWrapper, modalMainText, subText, copyStyle } =
  styles;
