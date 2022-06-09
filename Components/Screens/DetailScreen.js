import { StyleSheet, SafeAreaView, Image, Text, View } from "react-native";
import React from "react";
import COLORS from "../Const/Color";
import { MaterialIcons } from "@expo/vector-icons";

const DetailScreen = ({ navigation, route }) => {
  const plant = route.params;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.header}>
        <MaterialIcons
          name="arrow-back"
          size={28}
          style={styles.iconContainer}
          onPress={() => navigation.goBack()}
        />
        <MaterialIcons name="shopping-cart" size={28} />
      </View>
      <View style={styles.imageContainer}>
        <Image source={plant.img} style={{ flex: 1, resizeMode: "contain" }} />
      </View>
      <View style={styles.detailContainer}>
        <View
          style={{
            marginLeft: 20,
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <View style={styles.line} />
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>Best Choice</Text>
        </View>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>{plant.name}</Text>
          <View style={styles.priceTag}>
            <Text
              style={{
                marginLeft: 15,
                fontSize: 16,
                fontWeight: "bold",
                color: COLORS.white,
              }}
            >
              ${plant.price}
            </Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>About</Text>
          <Text
            style={{
              color: "grey",
              fontSize: 16,
              lineHeight: 22,
              marginTop: 20,
            }}
          >
            {plant.about}
          </Text>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={styles.borderBtn}>
                <Text style={styles.borderBtnText}>-</Text>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 10,
                  fontWeight: "bold",
                }}
              >
                1
              </Text>
              <View style={styles.borderBtn}>
                <Text style={styles.borderBtnText}>+</Text>
              </View>
            </View>
            <View style={styles.buyBtn}>
              <Text
                style={{
                  fontSize: 18,
                  color: COLORS.white,
                  fontWeight: "bold",
                }}
              >
                Buy
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    width: 30,
    height: 30,
    backgroundColor: COLORS.light,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  detailContainer: {
    flex: 0.55,
    marginTop: 30,
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: COLORS.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  priceTag: {
    width: 80,
    height: 40,
    backgroundColor: COLORS.green,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    justifyContent: "center",
  },
  borderBtn: {
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 5,
    height: 40,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  borderBtnText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buyBtn: {
    width: 150,
    height: 50,
    backgroundColor: COLORS.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
});
