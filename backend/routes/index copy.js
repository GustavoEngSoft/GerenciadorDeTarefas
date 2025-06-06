import React, { useState } from 'react';
import { TextField, Button, InputAdornment } from '@mui/material';
import './imput.css';
import Herder from '../../src/Componentes/Herder';
import PersonIcon from '@mui/icons-material/Person';
import {useNavigate} from 'react-router-dom';
import axios from 'axios'; // Adicione esta linha para importar o axios

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Estado para armazenar mensagens de erro
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { username, password });
      console.log('Login bem-sucedido:', response.data);
      localStorage.setItem('token', response.data.token);
      navigate('/painelGeral');
    } catch (err) {
      console.error('Erro ao fazer login:', err);
      setError('Credenciais inválidas'); // Define a mensagem de erro
    }
  };
  const handleRegisterClick = () => {
    navigate('/cadastroUsuario');
  };

  return (
    <div className='body'>
      <img src='./img/imgFundo.jpeg' alt="Imagem de Login" className="login-image"/>
      <div className="login-container">
        <form className='bloco_login' onSubmit={handleLogin}>
          <div className='text'>Tasky</div>
          <label htmlFor='username' className='input-label'>Email</label>
          <TextField 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PersonIcon />
                </InputAdornment>
              ),
              style: { backgroundColor:'#ffffff', borderRadius: '10px', width: '80%', marginLeft: '45px', marginTop: '5px', height:'52px'}
            }}
          />
          <label htmlFor='username' className='input-label'>Senha</label>
          <TextField
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            InputProps={{
              style: { backgroundColor:'#ffffff', borderRadius: '10px', width: '80%', marginLeft: '45px', marginTop: '5px', height:'52px'}
            }}
          />
          <Button type="submit" variant="contained" fullWidth sx={{ backgroundColor:'6D82F7', borderRadius: '10px', width: '80%', marginLeft: '45px', marginTop: '40px', height:'53px'}}>
            Confirmar
          </Button>
          <a onClick={handleRegisterClick} style={{ cursor: 'pointer', color: '#6D82F7', marginLeft: '45px', marginTop: '20px', display: 'block' }}>Cadastre-se</a>
        </form>
      </div>
    </div>
  );
};

export default Login;