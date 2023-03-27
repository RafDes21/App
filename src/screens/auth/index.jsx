import { useState } from "react";
import { View, TextInput, Button, Text, TouchableOpacity } from "react-native";
import { Card } from "../../components";
import { THEMES } from "../../constants";

import { styles } from "./styles";

const Auth = ({ navigation }) => {
  const [isLogin, setIsLogin] = useState(true);

  const title = isLogin ? "Login" : "Register";
  const message = isLogin
    ? "don't have an account?"
    : "Already have an account";
  const messageButton = isLogin ? "Login" : "Register";

  return (
    <View style={styles.container}>
      <Card style={styles.cardContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor={THEMES.white}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          placeholderTextColor={THEMES.white}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <Button
          title={messageButton}
          color={THEMES.background}
          onPress={() => {}}
        />
        <View style={styles.prompt}>
          <TouchableOpacity
            style={styles.promptButton}
            onPress={() => {
              setIsLogin(!isLogin);
            }}
          >
            <Text style={styles.promptMessage}>{message}</Text>
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  );
};

export default Auth;
