import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const validationPasswordMatch = (props) => {
    const {
      nativeEvent: { text },
    } = props;

    if (text !== password) {
      alert("Senhas não são iguais!");
    }
  };

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Cadastre-se</Text>
      </Animatable.View>
      <View style={styles.containerForm}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#10162f",
  },
  containerHeader: {
    marginVertical: "8%",
    paddingStart: "8%",
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#fff0e6",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingStart: "8%",
    paddingEnd: "8%",
  },
});

export default SignUp;
