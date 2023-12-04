import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type userBVNDataTypes = {
  userBVN: number | undefined;
  verificationID: string;
  isUserVerified: boolean | string;
  updateUserBVN: (data: number) => void;
  updateIsUserVerified: (data: boolean | string) => void;
  updateVerificationID: (data: string) => void;
};

export const KnowYourCustomerData = create<userBVNDataTypes>()(
  persist(
    set => ({
      userBVN: undefined,
      verificationID: '',
      isUserVerified: false,
      updateUserBVN: data => {
        set({ userBVN: data });
      },
      updateVerificationID: data => {
        set({ verificationID: data });
      },
      updateIsUserVerified: data => {
        set({ isUserVerified: data });
      },
    }),
    {
      name: 'KnowYourCustomerData',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
