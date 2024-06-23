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
    alert('Login failed');
    return false;
  }
};

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

