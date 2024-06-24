import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface LoginFormProps {
  onClose: () => void;
  onLogin: (email: string, password: string) => void;
}

interface IFormInput {
  email: string;
  password: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onClose, onLogin }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({mode: "onBlur"});

  const onSubmit: SubmitHandler<IFormInput> = data => {
    onLogin(data.email, data.password);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email</label>
        <input
          type="email"
          {...register('email', { required: 'Email is required', pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: 'Email is not valid' } })}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          {...register('password', { required: 'Password is required' })}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;

