import { useState } from "react";
import { View, TextInput, Button, Text, TouchableOpacity } from "react-native";
import { Card } from "../../components";
import { THEMES } from "../../constants";
import { styles } from "./styles";
import { signIn, signUp } from "../../store/slices/api-firebase";

import { useDispatch } from "react-redux";

const Auth = ({ navigation }) => {
  const dispatch = useDispatch();

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const title = isLogin ? "Login" : "Register";
  const message = isLogin
    ? "don't have an account?"
    : "Already have an account";
  const messageButton = isLogin ? "Login" : "Register";

  const onHandlerSubmit = () => {
    dispatch(isLogin ? signIn(email, password) : signUp(email, password));
  };

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
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          placeholderTextColor={THEMES.white}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <Button
          title={messageButton}
          color={THEMES.background}
          onPress={onHandlerSubmit}
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
