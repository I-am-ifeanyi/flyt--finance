import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';

import { Loader } from '../../../../ui/components/general';
import { Box } from '../../../../ui/components/layout';
import { Button } from '../../../../ui/components/layout';
import { colors } from '../../../../ui/theme/design-system/colors';
import { userData } from '../state/userDataState';
import { countriesData } from '../../../../services/JSON/countriesData';
import { styles as customStyles } from '../../../../ui/theme/design-system/styles';

export function WelcomePrompt() {
  const [isData, setIsData] = useState(true);
  const {
    legalInfo: { firstName },
  } = userData();
  const availableCountries = countriesData.filter(
    (item, index) => index > 40 && index < 50,
  );

  const { buttonContainer, buttonTitleStyle } = customStyles;

  if (!isData) {
    return (
      <Box>
        <Loader />
      </Box>
    );
  }

  return (
    <Box>
      <View style={{ flex: 1, marginVertical: 30 }}>
        <Text style={{ color: colors.light, fontSize: 24, fontWeight: '500', marginBottom: 10 }}>
          Welcome {firstName}!
        </Text>
        <Text
          style={{
            color: colors.light,
            fontSize: 20,
            fontWeight: '500',
          }}>
          Your default wallet currency
        </Text>
        <Text
          style={{
            color: colors.light,
            fontSize: 20,
            fontWeight: '500',
            marginBottom: 40,
          }}>
          is Nigerian Naira (NGN)
        </Text>
        <View
          style={{
            paddingVertical: 40,
            paddingHorizontal: 20,
            backgroundColor: colors.darker,
            borderRadius: 20,
          }}>
          <Text
            style={{ color: colors.light, fontSize: 18, fontWeight: '500' }}>
            Flyt is also available in other currencies
          </Text>
          <Text
            style={{ color: colors.grey, fontSize: 16, marginVertical: 10 }}>
            We are constantly expanding, and we will notify you whenever new
            currencies are added to Flyt. Here are other currencies available on
            Flyt
          </Text>
          <ScrollView
            style={scrollViewStyle}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {availableCountries?.map((item, index) => {
              return (
                <View style={countryContainer} key={index}>
                  <Text style={{ fontSize: 60 }}>{item.emoji}</Text>
                  <Text
                    style={{
                      color: colors.grey,
                      fontWeight: '700',
                      fontSize: 16,
                    }}>
                    {item.code}
                  </Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <Button
          handleOnPress={() => alert('Hello')}
          // @ts-expect-error
          containerStyle={[
            buttonContainer,
            { backgroundColor: colors.blue, marginTop: 'auto' },
          ]}
          titleStyle={buttonTitleStyle}
          title="Continue"
        />
      </View>
    </Box>
  );
}

const styles = StyleSheet.create({
  scrollViewStyle: {
    flexDirection: 'row',
  },
  countryContainer: {
    width: 70,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
});

const { scrollViewStyle, countryContainer } = styles;
