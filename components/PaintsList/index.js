import React from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import styles from "./styles";
import paints from './paints'
import PaintItem from "../PaintItem";

const PaintsList = (props) =>{


  return(
    <View style={styles.container}>
      <FlatList 
      data={paints}
      renderItem={({item}) => <PaintItem paint={item}/>}
      snapToAlignment={'start'}
      decelerationRate={'fast'}
      snapToInterval={Dimensions.get('window').height} />
    </View>
  )
}

export default PaintsList;