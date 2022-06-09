import React from "react";
import { StyleSheet, Text, Image, Dimensions, View } from "react-native";
import COLORS from "../Const/Color";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
const { width } = Dimensions.get("screen");
const Card = ({ plant, navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate("DetailScreen", plant)}
    >
      <View style={styles.card}>
        <View style={{ alignItems: "flex-end" }}>
          <View
            style={[
              styles.iconImage,
              { backgroundColor: plant.like ? COLORS.orange : COLORS.green },
            ]}
          >
            <MaterialIcons
              name="favorite"
              size={18}
              color={plant.like ? COLORS.red : COLORS.dark}
            />
          </View>
        </View>

        <View style={{ height: 100, alignItems: "center" }}>
          <Image
            style={{ flex: 1, resizeMode: "contain" }}
            source={plant.img}
          />
        </View>
        <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 20 }}>
          {plant.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 5,
          }}
        >
          <Text style={{ fontSize: 19, fontWeight: "bold" }}>
            ${plant.price}
          </Text>
          <View
            style={{
              width: 25,
              height: 25,
              backgroundColor: COLORS.green,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontSize: 22, fontWeight: "bold", color: COLORS.white }}
            >
              +
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    height: 225,
    width: width / 2 - 30,
    backgroundColor: COLORS.light,
    marginHorizontal: 2,
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  iconImage: {
    width: 30,
    height: 30,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
