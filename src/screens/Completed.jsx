import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextinputComp from '../components/TextinputComp'
import { moderateScaleVertical } from '../styles/responsiveSize'
import ButtonComp from '../components/ButtonComp'


const Completed = () => {
  return (
    <View style={{...styles.container}}>
     <TextinputComp placeholder={'Title'}/>
     <TextinputComp placeholder={'Detail'}/>
     <ButtonComp title={'ADD'}/>
    </View>
  )
}

export default Completed

const styles = StyleSheet.create({
    container:{
        flex:1,
      gap:moderateScaleVertical(15)
    }
})