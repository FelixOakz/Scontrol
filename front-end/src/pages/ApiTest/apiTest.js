import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";

const apiTest = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
    try {
        const response = await axios.get("https://2251-2804-1b1-4183-543d-c4c4-dc56-b9c4-9298.ngrok.io")
        setData(response.data.data);
    } catch (error) {
        console.error("error fetching data:", error);
    }
    };
    
    return (
        <View style={styles.container}>
            {
                data ? (
                    <Text>Hello: {data.hello}</Text>
                ) : (
                    <Text>Loading...</Text>
                )
            }
    
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default apiTest;
