import { useNavigation } from "@react-navigation/native"
import {
  Container,
  Content,
  ContentButton,
  UnivespLogo,
  ContentImage,
  ButtonText,
} from "./styles"

export const SignIn = () => {
  const navigation = useNavigation()

  const HandleLogin = () => {
    return navigation.navigate("Login")
  }

  return (
    <Container>
      <Content>
        <ContentImage>
          <UnivespLogo />
        </ContentImage>

        <ContentButton onPress={HandleLogin}>
          <ButtonText>SignIn</ButtonText>
        </ContentButton>
      </Content>
    </Container>
  )
}
