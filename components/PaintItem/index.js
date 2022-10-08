import React from "react";
import { Text, View, ImageBackground  } from "react-native";
import StyleButton from "../StyledButton";
import styles from './styles'

const PaintItem = (props)=>{

  const { name, tagline, image, taglineCTA} = props.paint;

  const goToAbout = ({navigation}) => {
    navigation.navigate({
      name: "About",
      params: {
        name: "About"
      }
    });
  }

  return(
    <View style={styles.paintContainer}>

    <ImageBackground 
    source={image} 
    style={styles.image}
    />
    <View style={styles.titles}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subtitle}>{tagline}{' '}<Text style={styles.subtitlesCTA}>{taglineCTA}</Text></Text>
    </View>

    <View style ={styles.buttonsContainer}>
     <StyleButton type="primary" content={"Custom Order"} onPress={() => goToAbout()}/>
     <StyleButton type="secondary" content={"Existing inventory"} onPress={() => goToAbout()}/>
    </View>
  
  </View>
  )
}

export default PaintItem;