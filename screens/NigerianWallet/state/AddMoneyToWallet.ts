import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type userBVNDataTypes = {
  amountToAdd: number | undefined;
  updateAmountToAdd: (data: number | undefined) => void;
};

export const addMoneyToWallet = create<userBVNDataTypes>()(
  persist(
    set => ({
      amountToAdd: undefined,
      updateAmountToAdd: data => {
        set({ amountToAdd: data });
      },
    }),
    {
      name: 'addMoneyToWallet',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
