import { useDispatch } from 'react-redux';
import { showContactsList } from 'redux/contactsFormSlice';
import { signUp } from 'redux/operations';
import { Formik, ErrorMessage } from 'formik';
// import * as yup from 'yup';
import 'yup-phone';
import {
  LoginFormStyled,
  InputLabel,
  Button,
  Input,
  ErrWrapper,
} from './SignUpForm.styled';

const initialsValues = {
  name: '',
  email: '',
  password: '',
};

// const FormSchema = yup.object().shape({
//   name: yup.string().min(2).required(),
//   number: yup.string().min(13).max(13).phone('UA').required(),
// });

export default function SignUpForm() {
  const dispatch = useDispatch();

  const handleSubmitForm = (values, { resetForm }) => {
    dispatch(
      signUp({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
    dispatch(showContactsList(true));
  };

  return (
    <Formik
      initialValues={initialsValues}
      onSubmit={handleSubmitForm}
      // validationSchema={FormSchema}
    >
      {props => (
        <LoginFormStyled>
          <div>
            <InputLabel>
              Name
              <Input type="text" name="name" placeholder="Andrii" />
              <ErrWrapper>
                <ErrorMessage name="name" />
              </ErrWrapper>
            </InputLabel>
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
          </div>
          <Button
            type="submit"
            disabled={
              (props.values.name !== '') &
              (props.values.email !== '') &
              (props.values.password !== '')
                ? false
                : true
            }
          >
            Sign up
          </Button>
        </LoginFormStyled>
      )}
    </Formik>
  );
}
