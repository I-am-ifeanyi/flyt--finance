import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type legalInfoProps = {
  firstName: string;
  lastName: string;
};

type userDataTypes = {
  userNumber: string;
  countryFlag: string;
  countryDialCode: string;
  countryName: string;
  password: string;
  loginPin: number | null;
  date_of_birth: string | undefined;
  OTP: number | null;
  useFaceID: boolean;
  legalInfo: legalInfoProps;
  userAddress: string;
  updateUserNumber: (data: string) => void;
  updateCountryFlag: (data: string) => void;
  updateCountryDialCode: (data: string) => void;
  updateCountryName: (data: string) => void;
  updatePassword: (data: string) => void;
  updateLoginPin: (data: number | null) => void;
  updateDateOfBirth: (data: string | undefined) => void;
  updateOTP: (data: number) => void;
  updateUseFaceID: (data: boolean) => void;
  updateLegalInformation: (data: legalInfoProps) => void;
  updateUserAddress: (data: string) => void;
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
      date_of_birth: undefined,
      OTP: null,
      useFaceID: false,
      legalInfo: { firstName: '', lastName: '' },
      userAddress: '',
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
      updateLoginPin: (data: number | null) => {
        set({ loginPin: data });
      },
      updateDateOfBirth: (data: string | undefined) => {
        set({ date_of_birth: data });
      },
      updateOTP: (data: number) => {
        set({ OTP: data });
      },
      updateUseFaceID: (data: boolean) => {
        set({ useFaceID: data });
      },
      updateLegalInformation: (data: legalInfoProps) => {
        set({
          legalInfo: {
            firstName: data.firstName,
            lastName: data.lastName,
          },
        });
      },
      updateUserAddress: data => {
        set({ userAddress: data });
      },
    }),
    {
      name: 'userData',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
