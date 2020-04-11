import React from 'react';
import classes from './Login.module.css'
import { reduxForm, Field } from 'redux-form';

const LoginForm = (props) => {
  return (
  <form action="" onSubmit={props.handleSubmit}>
    <Field type="text" placeholder="Enter your login" name={"login"} component="input" />
    <Field type="password" placeholder="Enter your password" name={"password"} component="input" />
    <Field type={"checkbox"} name={"rememberMe"} component="input" />remember me
    <button>login</button>
  </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  }
  return <div>
  <h1>Login</h1>
  <LoginReduxForm onSubmit={onSubmit} />
  </div>
}

export default Login;
