import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import logo from '../../assets/rate_it.png';

import { signInRequest } from '../../store/modules/auth/actions';

import {
  Container,
  Logo,
  FormInput,
  Form,
  SubmitButton,
  ButtonText,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }
  return (
    <>
      <Container>
        <Logo source={logo} />
        <Form>
          <FormInput
            name="email"
            placeholder="Informe seu E-mail"
            placeholderTextColor="#ddd"
            returnKeyType="next"
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            name="password"
            secureTextEntry
            placeholder="Informe sua senha"
            placeholderTextColor="#ddd"
            returnKeyType="send"
            onSubmitEdidting={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />
          <SubmitButton onPress={handleSubmit}>
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <ButtonText>Entrar no sistema</ButtonText>
            )}
          </SubmitButton>
        </Form>

        <SignLink
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        >
          <SignLinkText>Criar conta</SignLinkText>
        </SignLink>
      </Container>
    </>
  );
}
