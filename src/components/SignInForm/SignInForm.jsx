import { Formik, ErrorMessage } from 'formik';
// import * as yup from 'yup';
import 'yup-phone';
import {
  LoginFormStyled,
  InputLabel,
  Button,
  Input,
  ErrWrapper,
  Wrapper,
} from './SignInForm.styled';

import { useDispatch } from 'react-redux';
import { signIn } from 'redux/operations';

// const FormSchema = yup.object().shape({
//   name: yup.string().min(2).required(),
//   number: yup.string().min(13).max(13).phone('UA').required(),
// });

const initialsValues = {
  email: '',
  password: '',
};

export default function SignInForm() {
  const dispatch = useDispatch();

  const handleSubmitForm = (values, { resetForm }) => {
    dispatch(
      signIn({
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };

  return (
    <Formik
      initialValues={initialsValues}
      onSubmit={handleSubmitForm}
      // validationSchema={FormSchema}
    >
      {props => (
        <LoginFormStyled>
          <Wrapper>
            <InputLabel>
              Email
              <Input
                type="email"
                name="email"
                placeholder="example@gmail.com"
              />
              <ErrWrapper>
                <ErrorMessage name="email" />
              </ErrWrapper>
            </InputLabel>
            <InputLabel>
              Password
              <Input type="password" name="password" placeholder="********" />
              <ErrWrapper>
                <ErrorMessage name="password" />
              </ErrWrapper>
            </InputLabel>
          </Wrapper>
          <Button
            type="submit"
            disabled={
              (props.values.email !== '') & (props.values.password !== '')
                ? false
                : true
            }
          >
            Sign in
          </Button>
        </LoginFormStyled>
      )}
    </Formik>
  );
}
