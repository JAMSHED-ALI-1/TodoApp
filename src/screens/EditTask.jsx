import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextinputComp from '../components/TextinputComp'
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize'
import ButtonComp from '../components/ButtonComp'


const EditTask = () => {
  return (
    <View style={{...styles.container}}>
     <TextinputComp placeholder={'Title'}/>
     <TextinputComp placeholder={'Detail'}/>
     <ButtonComp title={'ADD'}/>
    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
      gap:moderateScaleVertical(15),
      paddingHorizontal:moderateScale(18)
    }
})

export default EditTask

