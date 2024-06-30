import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import classes from './loginform.module.css';

interface LoginFormProps {
  onClose: () => void;
  onLogin: (email: string, password: string) => void;
}

interface IFormInput {
  email: string;
  password: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onClose, onLogin }) => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<IFormInput>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<IFormInput> = data => {
    onLogin(data.email, data.password);
    onClose();
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.inputWrapper}>
        <input className={classes.input}
          type="email"
          placeholder="адрес электронной почты"
          {...register('email', { required: 'адрес электронной почты обязателен', pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: 'проверьте адрес электронной почты' } })}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
      </div>
      <div className={classes.inputWrapper}>
        <input className={classes.input}
          type="password"
          placeholder="пароль"
          {...register('password', { required: 'пароль обязателен' })}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
      </div>
      <input className={classes.submit}
        type="submit"
        value="войти"
        disabled={!isValid}
      />
    </form>
  );
};

export default LoginForm;

