import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require("../../assets/S.png")}
          style={{ width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <Animatable.View
        delay={600}
        animation="fadeInUp"
        style={styles.containerForm}
      >
        <Text style={styles.title}>
          Planeje e organize suas finanças de maneira rápida e em qualquer lugar
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff0e6",
  },
  containerLogo: {
    flex: 2,
    backgroundColor: "#fff0e6",
    justifyContent: "center",
    alignItems: "center",
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#10162f",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 28,
    marginBottom: 12,
    color: "#F6F6F6",
    textAlign: "center",
  },
  button: {
    position: "absolute",
    backgroundColor: "#ffd500",
    borderRadius: 10,
    paddingVertical: 8,
    width: "60%",
    alignSelf: "center",
    bottom: "30%",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#10162f",
  },
});

export default Welcome;
