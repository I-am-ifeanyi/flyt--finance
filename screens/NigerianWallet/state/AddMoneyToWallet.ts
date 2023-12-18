import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { formatter } from '../../../utils/currencyFormat';

type cardProps = {
  cardNumber: number | undefined | string;
  expiryMonth: number | undefined;
  expiryYear: number | undefined;
  cvv: number | undefined;
};

type userBVNDataTypes = {
  amountToAdd: number | bigint;
  userCardDetails: cardProps | undefined;
  currentBalance: number | bigint;
  updateAmountToAdd: (data: number | bigint) => void;
  updateUserCardDetails: (data: cardProps) => void;
  updateCurrentBalance: (data: number | bigint) => void;
};

export const addMoneyToWallet = create<userBVNDataTypes>()(
  persist(
    set => ({
      amountToAdd: 0,
      userCardDetails: {
        cardNumber: undefined,
        expiryMonth: undefined,
        expiryYear: undefined,
        cvv: undefined,
      },
      currentBalance: 0,
      updateAmountToAdd: data => {
        set({ amountToAdd: data });
      },
      updateUserCardDetails: data => {
        set({
          userCardDetails: data,
        });
      },
      updateCurrentBalance: data => {
        set(prev => ({
          currentBalance: (prev.currentBalance += data),
        }));
      },
    }),
    {
      name: 'addMoneyToWallet',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
