import { StyleSheet, Text, Image, View, Pressable, Alert } from "react-native";
import React from "react";

export default function Transaction() {
  const handleButtonPress = () => {
    Alert.alert("Button pressed");
  };

  return (
    <View style={styles.main}>
      <Image source={require("../image/icon.png")} style={styles.icon} />
      <Text style={styles.sentText}>
        Sent successfully to <Text style={styles.boldText}>Lela Crawford</Text>
      </Text>
      <Text style={styles.amount}>$100.00</Text>

      <View style={styles.userWrapper}>
        <Image source={require("../image/avater.png")} style={styles.avater} />
        <View style={styles.userInfo}>
          <Text style={styles.name}>John Crawfood</Text>
          <Text style={styles.email}>John123@gmail.com</Text>
        </View>
      </View>

      <View style={styles.grayLine} />

      <Text style={styles.transactionInfo}>
        Transaction done on <Text style={styles.boldText}>12 January 2023</Text>. Your reference number is
        1234567890.
      </Text>

      <Pressable style={styles.continueButton} onPress={handleButtonPress}>
        <Text style={styles.btnText}>Continue</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: "#fff",
    width: "80%",
    maxHeight: "70%",
    flex: 1,
    alignItems: "center",
    borderRadius: 20,
  },
  icon: {
    marginBottom: 20,
    width: 100,
    height: 100,
  },
  avater: {
    width: 60,
    height: 60,
  },
  sentText: {
    color: "#466c6b",
    fontSize: 18,
  },
  boldText: {
    fontWeight: "bold",
  },
  amount: {
    paddingTop: 20,
    paddingBottom: 20,
    color: "#466c6b",
    fontWeight: "bold",
    fontSize: 30,
  },
  userWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
  userInfo: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
  },
  email: {
    color: "gray",
    fontSize: 16,
  },
  grayLine: {
    height: 2,
    width: "90%",
    marginTop: 40,
    marginBottom: 20,
    backgroundColor: "#e9e9e9",
  },
  transactionInfo: {
    color: "#466c6b",
    fontSize: 16,
    padding: 20,
    textAlign: "center",
  },
  continueButton: {
    backgroundColor: "#466c6b",
    width: "90%",
    borderRadius: 30,
    marginTop: 30,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  btnText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    padding: 20,
    textAlign: "center",
  },
});
