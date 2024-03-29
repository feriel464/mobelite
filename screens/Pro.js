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
import { Images, argonTheme, articles } from "../constants/";

import { Card } from "../components/";
import React from "react";
import artc from "../constants/artc";
import ptdej from "../components/Petitdej";
import Petitdej from "../components/Petitdej";
import Sucrée from "../components/Sucrée";
import Fast from "../components/Fast";
const { width } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;
const categories = [
  {
    title: "resto",
    description:
      "Sousse",
    image:
      "https://img.restaurantguru.com/c9ac-LAromate-Restaurant-Pizzeria-view.jpg",
    price: "L'aromate",
    
  },
  {
    title: "",
    description:
      "sousse",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipPb-5ENrLkdjgS1t0zYIxUkp9-ldbOiQF_T1Pcn=w500-h500-k-no",
    price: "Miam's",
  },
  
  {
    title: "",
    description:
      "sousse",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/14/2e/15/fc/entrance.jpg",
    price: "Hard Rock",
  },
  
  {
    title: "",
    description:
      "sousse",
    image:
      "https://www.marhba.com/images/Bellini-pool.jpg",
    price: "Bellini",
  },
];

class Pro extends React.Component {
  renderProduct = (item, index) => {
    const { navigation } = this.props;

    return (
      <TouchableWithoutFeedback
        style={{ zIndex: 3 }}
        key={`product-${item.title}`}
        onPress={() => navigation.navigate("Pro", { product: item })}
      >
        <Block center style={styles.productItem}>
          <Image
            resizeMode="cover"
            style={styles.productImage}
            source={{ uri: item.image }}
          />
          <Block center style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <Text
              center
              size={16}
              color={theme.COLORS.MUTED}
              style={styles.productPrice}
            >
              {item.price}
            </Text>
            <Text center size={34}>
              {item.title}
            </Text>
            <Text
              center
              size={16}
              color={theme.COLORS.MUTED}
              style={styles.productDescription}
            >
              {item.description}
            </Text>
          </Block>
        </Block>
      </TouchableWithoutFeedback>
    );
  };

  renderCards = () => {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.group}>
        <Text bold size={16} style={styles.title}
                                        >
          des articles disponibles 
        </Text>
        
        <Block flex>
          <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <Card item={artc[0]} horizontal 
            />
            
            <Block flex row>
              <Petitdej
           
                item={artc[1]}
                style={{ marginRight: theme.SIZES.BASE }}
              />
              <Sucrée item={artc[2]} />
            </Block>
            <Fast item={artc[4]} full />
            <Block flex card shadow style={styles.category}>
              <ImageBackground
               onPress={() => navigation.navigate("Foods")}

                source={{ uri: Images.FoodsPr["View article"] }}
                style={[
                  styles.imageBlock,
                  { width: width - theme.SIZES.BASE * 2, height: 252 },
                ]}
                imageStyle={{
                  width: width - theme.SIZES.BASE * 2,
                  height: 252,
                }}
              >
                <Block style={styles.categoryTitle}>
                  <Text size={18} bold color={theme.COLORS.WHITE}
                                onPress={() => navigation.navigate("Foods")}

                  >
                    View article
                  </Text>
                </Block>
              </ImageBackground>
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
              {categories &&
                categories.map((item, index) =>
                  this.renderProduct(item, index)
                )}
            </ScrollView>
          </Block>
        </Block>
      </Block>
    );
  };

  renderAlbum = () => {
    const { navigation } = this.props;

    return (
      <Block
        flex
        style={[styles.group, { paddingBottom: theme.SIZES.BASE * 5 }]}
      >
        <Text bold size={16} style={styles.title}>
          Album
        </Text>
        <Block style={{ marginHorizontal: theme.SIZES.BASE * 2 }}>
          <Block flex right>
            <Text
              size={12}
              color={theme.COLORS.PRIMARY}
              onPress={() => navigation.navigate("Viewfood")}
            >
              View All
            </Text>
          </Block>
          <Block
            row
            space="between"
            style={{ marginTop: theme.SIZES.BASE, flexWrap: "wrap" }}
          >
            {Images.Foods.map((img, index) => (
              <Block key={`viewed-${img}`} style={styles.shadow}>
                <Image
                  resizeMode="cover"
                  source={{ uri: img }}
                  style={styles.albumThumb}
                />
              </Block>
            ))}
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
          {this.renderAlbum()}
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

export default Pro;
