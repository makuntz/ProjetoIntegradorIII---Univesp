import { SignIn } from "./src/Views/SignIn"
import { Login } from "./src/Views/Login"
import { Home } from "./src/Views/Home"
import { Register } from "./src/Views/Register"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { useState } from "react"

export default function App() {
  const Stack = createStackNavigator()

  const [user, setUser] = useState()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
