import React from 'react';
import {View} from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomHeader from '../components/CustomHeader';
import CustomDescr from '../components/CustomDescr';

import {useSelector, useDispatch} from 'react-redux'
import { changeCount } from '../actions/actions';

const IntroAgeScreen_3 = () => {

  const itemCount= useSelector(state => state.countReducer.count);  
  const dispatch = useDispatch();

  console.log('itemCount', itemCount);
  
  return (
    <View>
      <CustomHeader title={itemCount} />
      <CustomDescr title="Screen 2 counter," />
      <CustomButton title={'Button 3'}  onClick={() => {dispatch(changeCount())}}/>
    </View>
  );
};

export default IntroAgeScreen_3;
