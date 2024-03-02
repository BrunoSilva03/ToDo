import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';


export const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submit = e => {
        e.preventDefault();

        Meteor.loginWithPassword(username, password);
    };

    return(
        <form onSubmit={submit} className="login-form">
            <label htmlFor="username">Nome de usuário: </label>

            <input
                type="text"
                placeholder="Insira o nome de usuário"
                name="username"
                required
                onChange={e => setUsername(e.target.value)}
            />


            <label htmlFor="password">Senha: </label>

            <input
                type="password"
                placeholder="Insira a senha"
                name="password"
                onChange={e => setPassword(e.target.value)}
            />

            <button type="submit">Entrar</button>

        </form>
    )
}