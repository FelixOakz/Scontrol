import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const SignIn = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      const response = await axios.post(
        "https://d06e-2804-1b1-4183-543d-c4c4-dc56-b9c4-9298.ngrok-free.app/api/signIn",
        {
          email: email,
          password: password,
        },
      );
      if (response.data.success) {
        alert(response.data.message);
        console.log(response.data);
        navigation.navigate("Home");

      } else {
        alert(response.data.message);

      }
    } catch (error) {
      console.error("Error during sign-in", error);
      alert("An error occurred during Sign-In");
    }
  };

  

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Bem-vindo</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        
        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder="Digite um email"
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          placeholder="Digite sua senha"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.buttonRegisterText}>
            Não possui conta? cadastre-se
          </Text>
        </TouchableOpacity>
      </Animatable.View>
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
  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#F6F6F6",
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#fff0e6",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingStart: "8%",
    paddingEnd: "8%",
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#10162f",
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#f6f6f6",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: "center",
  },
  buttonRegisterText: {
    color: "#a1a1a1",
  },
});

export default SignIn;
