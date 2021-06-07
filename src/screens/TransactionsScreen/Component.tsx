import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';

import {Navigation} from 'react-native-navigation';
import {screenIds} from '../index';

import {useHooks} from './useHooks';
import {Button, View} from 'react-native-ui-lib/core';

type Props = {
  email: string;
  password: string;
};

type Transaction = {shop: string; amount: number; account: string};

const renderTransaction = ({shop, account, amount}: Transaction) => {
  return (
    <View key={shop + account} paddingB-20>
      <View spread row>
        <Text>{shop}</Text>
        <Text style={{fontSize: 20}}>{`${amount} грн`}</Text>
      </View>
      <View spread>
        <Text>{account}</Text>
      </View>
    </View>
  );
};

const Component = (props: Props) => {
  const transactions = [
    {shop: 'EpicentrK', amount: -150, account: 'Monobank'},
    {shop: 'McDonalds', amount: -85, account: 'Monobank'},
    {shop: 'Silpo', amount: -150.45, account: 'PrivatBank'},
    {shop: 'ATB', amount: -1234.1, account: 'Monobank'},
    {shop: 'Rozetka', amount: -174.5, account: 'PrivatBank'},
    {shop: 'EpicentrK', amount: -150, account: 'Monobank'},
    {shop: 'McDonalds', amount: -85, account: 'Monobank'},
    {shop: 'Silpo', amount: -150.45, account: 'PrivatBank'},
    {shop: 'ATB', amount: -1234.1, account: 'Monobank'},
    {shop: 'Rozetka', amount: -174.5, account: 'PrivatBank'},
    {shop: 'EpicentrK', amount: -150, account: 'Monobank'},
    {shop: 'McDonalds', amount: -85, account: 'Monobank'},
    {shop: 'Silpo', amount: -150.45, account: 'PrivatBank'},
    {shop: 'ATB', amount: -1234.1, account: 'Monobank'},
    {shop: 'Rozetka', amount: -174.5, account: 'PrivatBank'},
  ];

  return (
    <SafeAreaView style={{marginHorizontal: 20, marginVertical: 20}}>
      <ScrollView>
        {transactions.map((transaction) => renderTransaction(transaction))}
      </ScrollView>
    </SafeAreaView>
  );
};

Navigation.registerComponent(screenIds.LOGIN_SCREEN, () => Component);

export default Component;
