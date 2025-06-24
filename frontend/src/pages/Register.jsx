import { useState } from 'react';

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'guest' });

  const handleRegister = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    alert('Registration successful');
  };

  return (
    <form onSubmit={handleRegister} className="p-4 max-w-md mx-auto">
      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} className="w-full p-2 mb-2 border" />
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} className="w-full p-2 mb-2 border" />
      <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} className="w-full p-2 mb-2 border" />
      <select onChange={e => setForm({ ...form, role: e.target.value })} className="w-full p-2 mb-2 border">
        <option value="guest">Guest</option>
        <option value="host">Host</option>
      </select>
      <button className="bg-green-500 text-white px-4 py-2">Register</button>
    </form>
  );
}
export default Register;