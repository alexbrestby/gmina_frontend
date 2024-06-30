import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import classes from './registerfrom.module.css';

interface RegisterFormProps {
  onClose: () => void;
  onRegister: (email: string, password: string, username: string) => void;
}

interface IFormInput {
  email: string;
  password: string;
  username: string;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onClose, onRegister }) => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<IFormInput>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<IFormInput> = data => {
    onRegister(data.email, data.password, data.username);
    onClose();
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.inputWrapper}>
        <input className={classes.input}
          type="email"
          placeholder="адрес электронной почты"
          {...register('email', { required: 'введите адрес электронной почты', pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: 'проверьте адрес электронной почты' } })}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
      </div>
      <div className={classes.inputWrapper}>
        <input className={classes.input}
          type="text"
          placeholder="имя или псевдоним"
          {...register('username', { required: 'введите Ваше имя' })}
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username.message}</p>}
      </div>
      <div className={classes.inputWrapper}>
        <input className={classes.input}
          type="password"
          placeholder="пароль"
          {...register('password', { required: 'введите пароль' })}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
      </div>
      <input
        type="submit"
        value="зарегистрироваться"
        className={classes.submit}
        disabled={!isValid}
      />
    </form>
  );
};

export default RegisterForm;

