import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
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
      <View style={styles.containerForm}>
        <Text style={styles.title}>Nome</Text>
        <TextInput placeholder="Digite seu nome" style={styles.input} />

        <Text style={styles.title}>Email</Text>
        <TextInput placeholder="Digite um email" style={styles.input} />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          placeholder="Digite sua senha"
          secureTextEntry
          style={styles.input}
        />
        <Text style={styles.title}>Confirmação de senha</Text>
        <TextInput
          placeholder="confirme sua senha"
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
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
});

export default SignUp;
