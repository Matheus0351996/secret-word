import * as React from 'react';
import { useState } from 'react';
import './style.css';

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enviando o formulário');
    console.log(name, email);

    setEmail(' ');
    setName(' ');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Nome </label>
        <input
          type="text"
          name="name"
          placeholder="Digite o seu nome"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="name"> E-mail </label>
        <input
          type="text"
          name="name"
          placeholder="Digite o seu nome"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
}
