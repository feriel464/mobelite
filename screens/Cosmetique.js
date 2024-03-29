//galio
import { Block, Text,Button as GaButton, theme } from "galio-framework";
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";
//argon
import { Images, argonTheme, articles} from "../constants";
import { Card } from "../components";
import React from "react";
import hair from "../constants/hair";
import Make from "../components/Make";
import makeup from "../constants/makeup";
const { width } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;

class Cosmetique extends React.Component {


  renderCards = () => {
    const item = this.props.route.params.product;
    console.log("test", item)
    const { navigation } = this.props;
    return (
      <Block flex style={styles.group}>
        <Text bold size={16} 
        style={styles.title}
        onPress={() => navigation.navigate("Wahiba")}

         >
          des articles disponibles 
        </Text>
        <Block style={{ paddingHorizontal: "0%" , marginRight:"-1%"}}>
        <Block flex>
          <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
           
            <Make item={makeup[1]} full />
            <Make item={makeup[2]} full />

            
            <Make item={makeup[4]} full />
            <Make item={makeup[3]} full />
        

          </Block>
  
            </Block>
          <Block flex style={{ marginTop: theme.SIZES.BASE / 2 }}>
            <ScrollView
              horizontal={true}
              pagingEnabled={true}
              decelerationRate={0}
              scrollEventThrottle={16}
              snapToAlignment="center"
              showsHorizontalScrollIndicator={false}
              snapToInterval={cardWidth + theme.SIZES.BASE * 0.375}
              contentContainerStyle={{
                paddingHorizontal: theme.SIZES.BASE / 2,
              }}
            >
             
            </ScrollView>
          </Block>
        </Block>
      </Block>
    );
  };


  render() {
   
    return (
      <Block flex center>
        <ScrollView showsVerticalScrollIndicator={false}>
          {this.renderCards()}
        </ScrollView>
      </Block>
    );
  };
  
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 22,
    color: argonTheme.COLORS.HEADER,
  },
  group: {
    paddingTop: theme.SIZES.BASE,
  },
  group1: {
    paddingTop: theme.SIZES.BASE * 2,
  },
  albumThumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure,
  },
  category: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE / 2,
    borderWidth: 0,
  },
  categoryTitle: {
    height: "100%",
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  imageBlock: {
    overflow: "hidden",
    borderRadius: 4,
  },
  productItem: {
    width: cardWidth - theme.SIZES.BASE * 2,
    marginHorizontal: theme.SIZES.BASE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 7 },
    shadowRadius: 10,
    shadowOpacity: 0.2,
  },
  productImage: {
    width: cardWidth - theme.SIZES.BASE,
    height: cardWidth - theme.SIZES.BASE,
    borderRadius: 3,
  },
  productPrice: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2,
  },
  productDescription: {
    paddingTop: theme.SIZES.BASE,
    // paddingBottom: theme.SIZES.BASE * 2,
  },
});

export default Cosmetique;
