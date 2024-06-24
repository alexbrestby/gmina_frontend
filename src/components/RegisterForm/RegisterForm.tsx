import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

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
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = data => {
    onRegister(data.email, data.password, data.username);
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
        <label>Username</label>
        <input
          type="text"
          {...register('username', { required: 'Username is required' })}
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username.message}</p>}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          {...register('password', { required: 'Password is required' })}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;

