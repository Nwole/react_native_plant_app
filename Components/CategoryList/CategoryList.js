import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import COLORS from "../Const/Color";

const CategoryList = () => {
  const [categorySelectedIndex, setCategorySelectedIndex] = useState(0);
  const Categories = ["POPULAR", "ORGANIC", "INDOOR", "SYNTHETIC"];
  return (
    <View style={styles.CategoryContainer}>
      {Categories.map((item, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.8}
          onPress={() => setCategorySelectedIndex(index)}
        >
          <View>
            <Text
              style={[
                styles.categoryText,
                categorySelectedIndex == index && styles.categoryTextSelected,
              ]}
            >
              {item}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  CategoryContainer: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-between",
    marginBottom: 20,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "grey",
  },
  categoryTextSelected: {
    color: COLORS.green,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderColor: COLORS.green,
  },
});
