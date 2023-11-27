import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
  FlatList,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { userData } from '../state/userDataState';
import { navigate } from '../../../../utils/navigation';

import { Button } from '../../../../ui/components/layout';
import TextInput from '../../../../ui/form/TextInput';
import { colors } from '../../../../ui/theme/design-system/colors';
import { Box } from '../../../../ui/components/layout';
import { countriesData } from '../../../../services/JSON/countriesData';
import CloseIcon from '../../../../assets/icons/closeIcon.svg';

export function CountrySelect({ navigation, route }: any) {
  const { stack } = route.params;

  const {
    control,
    watch,
    handleSubmit,
    reset,
    getFieldState,
    setValue,
    formState: { errors },
  } = useForm();
  const {
    updateCountryFlag,
    updateCountryName,
    updateCountryDialCode,
    countryName,
  } = userData();

  const [searchCountry, setSearchCountry] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(countryName);
  const [userCountryFlag, setUserCountryFlag] = useState('');
  const [countryDialCode, setCountryDialCode] = useState('');
  const [isCountrySelected, setIsCountrySelected] = useState(false);

  type countryTypes = {
    emoji: string;
    dialing_code: string;
    name: string;
  };

  const filterCountryData = countriesData.filter((item, index) =>
    item.name.toLocaleLowerCase().startsWith(searchCountry.toLocaleLowerCase()),
  );

  const setItems = (item: countryTypes) => {
    setUserCountryFlag(item.emoji);
    setSelectedCountry(item?.name);
    setCountryDialCode(item.dialing_code);
    setSearchCountry(item?.name);
    setIsCountrySelected(true);
  };

  const renderItem = ({ item }: { item: countryTypes }) => (
    <Pressable style={renderItemContainer} onPress={() => setItems(item)}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontSize: 26, marginRight: 10 }}>{item.emoji}</Text>
        <Text style={{ fontSize: 18, color: colors.light }}>
          {item.dialing_code} -
        </Text>
        <Text style={{ fontSize: 18, color: colors.light }}> {item.name}</Text>
      </View>
      <View
        style={{
          width: 20,
          height: 20,
          borderWidth: 1,
          borderColor:
            item.name === selectedCountry && isCountrySelected
              ? colors.blue
              : colors.grey,
          borderRadius: 100,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: 12,
            height: 12,
            borderRadius: 100,
            backgroundColor:
              item.name === selectedCountry && isCountrySelected
                ? colors.blue
                : 'transparent',
          }}></View>
      </View>
    </Pressable>
  );

  const onSubmit = (data: any) => {
    if (isCountrySelected) {
      updateCountryFlag(userCountryFlag);
      updateCountryName(selectedCountry);
      updateCountryDialCode(countryDialCode);
      if (stack === 'signUp') {
        navigate('SignUpNavigationStack', { screen: 'EnterAddress' });
      } else navigation.goBack();

      setIsCountrySelected(false);
    } else alert('Please select country');
    console.log(data);
  };


  return (
    <Box>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
          }}>
          <TextInput
            value={selectedCountry}
            textInputField={'countrySelect'}
            placeholder={'Search country'}
            onSubmitEditing={data => console.log(data)}
            keyboardType={'default'}
            selectTextOnFocus={true}
            placeholderTextColor={'#777776'}
            editable={true}
            isSearchIcon={true}
            handleChange={data => {
              setSearchCountry(data);
              setSelectedCountry(data);
            }}
            control={control}
            inputWrapperStyle={inputWrapperStyle}
            inputStyle={inputStyle}
          />
          <Pressable onPress={() => navigation.goBack()}>
            <CloseIcon />
          </Pressable>
        </View>

        <View style={countryListsWrapper}>
          <FlatList
            data={filterCountryData}
            keyExtractor={item => item.code}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <Button
          handleOnPress={handleSubmit(onSubmit)}
          title="Continue"
          containerStyle={buttonContainer}
          titleStyle={buttonTitleStyle}
          disabled={selectedCountry ? false : true}
        />
      </KeyboardAvoidingView>
    </Box>
  );
}

const styles = StyleSheet.create({
  inputWrapperStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: colors.darker,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 100,
  },
  inputStyle: {
    fontSize: 16,
    color: colors.light,
    height: '100%',
    width: '80%',
  },
  renderItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  countryListsWrapper: {
    flex: 4,
    marginTop: 40,
  },
  buttonContainer: {
    width: '100%',
    height: 45,
    backgroundColor: colors.blue,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 60,
  },
  buttonTitleStyle: {
    color: colors.light,
    fontSize: 18,
    fontWeight: '600',
  },
});

const {
  countryListsWrapper,
  inputWrapperStyle,
  inputStyle,
  renderItemContainer,
  buttonContainer,
  buttonTitleStyle,
} = styles;
