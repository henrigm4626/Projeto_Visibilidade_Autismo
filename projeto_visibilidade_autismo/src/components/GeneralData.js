import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';

const GeneralData = ({ onDataChange }) => {
  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    onDataChange(updatedFormData);
  };

  return (
    <div>
      <form className='flex w-full align-center gap-8'>
            <TextField
              label="Nome Completo"
              fullWidth
              variant="standard"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              helperText="Insira seu nome ou o nome do responsável pelo contato"
            />

            <TextField
              label="Idade"
              fullWidth
              variant="standard"
              name="idade"
              value={formData.idade}
              onChange={handleChange}
              type="number"
              helperText="Insira sua idade"
            />
            <TextField
              label="Email"
              fullWidth
              variant="standard"
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              helperText="Insira seu email"
            />
      </form>
    </div>
  );
};

export default GeneralData;