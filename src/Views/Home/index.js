import {
  ButtonText,
  Container,
  Content,
  ContentButton,
  HomeInput,
  HomeLabel,
  ButtonLogout,
  ContentButtonLogout,
} from "./styles"

import { useNavigation } from "@react-navigation/native"

export const Home = () => {
  const navigation = useNavigation()

  const HandleLogout = () => {
    return navigation.navigate("SignIn")
  }

  return (
    <>
      <ContentButtonLogout>
        <ButtonLogout onPress={HandleLogout}>Sair</ButtonLogout>
      </ContentButtonLogout>
      <Container>
        <HomeLabel size={30}>Olá, shalana</HomeLabel>
        <Content>
          <HomeLabel>Nota das Atividades</HomeLabel>
          <HomeInput />
          <HomeLabel>Nota da Prova</HomeLabel>
          <HomeInput />
          <ContentButton>
            <ButtonText>Calcular</ButtonText>
          </ContentButton>
        </Content>
      </Container>
    </>
  )
}
