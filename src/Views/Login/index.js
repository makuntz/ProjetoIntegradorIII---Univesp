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
  return (
    <Container>
      <Content>
        <ContainerInput>
          <LoginLabel>Faça login com seu e-mail acadêmico</LoginLabel>
          <LoginInput />
          <LoginInput />
        </ContainerInput>
        <ContentButton>
          <ButtonText>Acessar</ButtonText>
        </ContentButton>
      </Content>
    </Container>
  )
}
