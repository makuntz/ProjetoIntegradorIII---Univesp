import { useNavigation } from "@react-navigation/native"

import {
  Container,
  Content,
  LoginInput,
  LoginLabel,
  ContainerInput,
  ContentButton,
  ButtonText,
} from "./styles"

export const Login = () => {
  const navigation = useNavigation()

  const HandleLogin = () => {
    return navigation.navigate("Home")
  }

  const HandleRegister = () => {
    return navigation.navigate("Register")
  }

  return (
    <Container>
      <Content>
        <ContainerInput>
          <LoginLabel>Faça login com seu e-mail acadêmico</LoginLabel>
          <LoginInput />
          <LoginInput />
        </ContainerInput>
        <ContentButton>
          <ButtonText onPress={HandleLogin}>Acessar</ButtonText>
        </ContentButton>
        <ContentButton size={25}>
          <ButtonText onPress={HandleRegister}>Cadastrar</ButtonText>
        </ContentButton>
      </Content>
    </Container>
  )
}
