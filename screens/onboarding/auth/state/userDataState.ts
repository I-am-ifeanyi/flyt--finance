import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type userDataTypes = {
  userNumber: string;
  countryFlag: string;
  countryDialCode: string;
  countryName: string;
  password: string;
  loginPin: number | null;
  updateUserNumber: (data: string) => void;
  updateCountryFlag: (data: string) => void;
  updateCountryDialCode: (data: string) => void;
  updateCountryName: (data: string) => void;
  updatePassword: (data: string) => void;
  updateLoginPin: (data: number) => void;
  clearCountryData?: () => void;
};

export const userData = create<userDataTypes>()(
  persist(
    set => ({
      userNumber: '123',
      countryFlag: '',
      countryDialCode: '',
      countryName: '',
      password: '',
      loginPin: 1974,
      updateUserNumber: (data: string) => {
        set({ userNumber: data });
      },
      updateCountryFlag: (data: string) => {
        set({ countryFlag: data });
      },
      updateCountryDialCode: data => {
        set({ countryDialCode: data });
      },
      updateCountryName: (data: string) => {
        set({ countryName: data });
      },
      updatePassword: (data: string) => {
        set({ password: data });
      },
      updateLoginPin: (data: number) => {
        set({ loginPin: data });
      },
    }),
    {
      name: 'userData',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
