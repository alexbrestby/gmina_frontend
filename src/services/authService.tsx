export const login = async (email: string, password: string) => {
  const response = await fetch('http://localhost:5000/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
    credentials: 'include',
  });

  if (response.ok) {
    const data = await response.json();
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('username', data.username);
    return true;
  } else {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Login failed')
  }
};

export const register = async (email: string, password: string, username: string) => {
  const response = await fetch('http://localhost:5000/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, username }),
    credentials: 'include',
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data);
    return true;
  } else {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Registration faild');
  }
}

export const logout = async () => {
  const response = await fetch('http://localhost:5000/user/logout', {
    method: 'POST',
    credentials: 'include',
  });

  if (response.ok) {
    localStorage.removeItem('accessToken');
    return true;
  } else {
    alert('Logout failed');
    return false;
  }
};

