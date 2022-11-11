import {
  ButtonText,
  Container,
  ContainerInput,
  Content,
  RegisterInput,
  RegisterLabel,
  ContentButton,
} from "./styles"

import { useNavigation } from "@react-navigation/native"
import { useState } from "react"

export const Register = () => {
  const [name, setName] = useState(null)
  const [ra, setRa] = useState(null)
  const [errorName, setErrorName] = useState(null)
  const [errorRa, setErrorRa] = useState(null)

  const validate = () => {
    let error = false

    if (name == null) {
      setErrorName("Preencha o campo")
      error = true
    }
    if (ra == null) {
      setErrorRa("Preencha o campo")
      error = true
    }
    return !error
  }
  const navigation = useNavigation()

  const save = () => {
    if (validate()) {
      console.log("FUNCIONOUUUUUUUUUUUUUUUUUU")
      navigation.navigate("Home")
    } else {
      console.log("deu bosta")
    }
  }

  return (
    <>
      <Container>
        <RegisterLabel size={30}>Cadastrar</RegisterLabel>
        <Content>
          <ContainerInput>
            <RegisterLabel>Nome</RegisterLabel>
            <RegisterInput
              placeholder="Nome"
              onChangeText={(value) => {
                setName(value)
                setErrorName(null)
              }}
              errorMessage={errorName}
            />
            <RegisterLabel>R.A.</RegisterLabel>
            <RegisterInput
              placeholder="R.A."
              onChangeText={(value) => {
                setRa(value)
                setErrorRa(null)
              }}
              errorMessage={errorRa}
            />
          </ContainerInput>

          <ContentButton>
            <ButtonText onPress={save}>Cadastrar</ButtonText>
          </ContentButton>
        </Content>
      </Container>
    </>
  )
}
