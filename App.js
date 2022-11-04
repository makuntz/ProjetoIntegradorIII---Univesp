import { SignIn } from "./src/Views/SignIn"
import { Login } from "./src/Views/Login"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SignIn">{<SignIn />}</Stack.Screen>
          <Stack.Screen name="Login">{<Login />}</Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
