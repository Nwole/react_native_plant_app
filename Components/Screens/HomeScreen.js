import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  FlatList,
  Text,
  View,
} from "react-native";
import React from "react";
import COLORS from "../Const/Color";
import { MaterialIcons } from "@expo/vector-icons";
import CategoryList from "../CategoryList/CategoryList";
import Card from "../Card/Card";
import Plants from "../Const/Plants";
// import Constants from "expo-constants";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: COLORS.white, paddingHorizontal: 20 }}
    >
      <View style={styles.header}>
        <View>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Welcome</Text>
          <Text
            style={{ fontSize: 38, fontWeight: "bold", color: COLORS.green }}
          >
            Plant Shop
          </Text>
        </View>
        <MaterialIcons name="shopping-cart" size={28} />
      </View>
      <View style={{ marginTop: 30, flexDirection: "row" }}>
        <View style={styles.searchInput}>
          <MaterialIcons name="search" size={25} style={{ marginLeft: 20 }} />
          <TextInput placeholder="search" style={styles.input} />
        </View>
        <View style={styles.sortBtn}>
          <MaterialIcons name="sort" size={30} color={COLORS.white} />
        </View>
      </View>
      <CategoryList />
      <FlatList
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ marginTop: 10, paddingBottom: 50 }}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={Plants}
        renderItem={({ item }) => <Card plant={item} navigation={navigation} />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchInput: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.dark,
    flex: 1,
  },
  sortBtn: {
    height: 50,
    width: 50,
    marginLeft: 10,
    backgroundColor: COLORS.green,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
