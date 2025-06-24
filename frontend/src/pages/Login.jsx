import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    localStorage.setItem('token', data.token);
    alert('Login successful');
  };

  return (
    <form onSubmit={handleLogin} className="p-4 max-w-md mx-auto">
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full p-2 mb-2 border" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="w-full p-2 mb-2 border" />
      <button className="bg-pink-500 text-white px-4 py-2">Login</button>
    </form>
  );
}
export default Login;