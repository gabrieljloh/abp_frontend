import React, { useState } from 'react';

const Gis = () => {
  const [endereco, setEndereco] = useState({
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    complemento: ''
  });
  const [enderecos, setEnderecos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEndereco({
      ...endereco,
      [name]: value
    });
  };

  const addOrUpdateEndereco = () => {
    if (!endereco.rua || !endereco.numero || !endereco.bairro || !endereco.cidade) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    if (isEditing) {
      const updatedEnderecos = [...enderecos];
      updatedEnderecos[editIndex] = endereco;
      setEnderecos(updatedEnderecos);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setEnderecos([...enderecos, endereco]);
    }
    setEndereco({
      rua: '',
      numero: '',
      bairro: '',
      cidade: '',
      complemento: ''
    });
  };

  const editEndereco = (index) => {
    setEndereco(enderecos[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const deleteEndereco = (index) => {
    const updatedEnderecos = enderecos.filter((_, i) => i !== index);
    setEnderecos(updatedEnderecos);
  };

  return (
    <>
      <div className='flex flex-col items-center'>
        <h2 className='text-xl mb-4'>{isEditing ? 'Editar endereço' : 'Inserir novo endereço'}:</h2>
        <form className='max-w-lg w-full mx-0 my-auto'>
          {['rua', 'numero', 'bairro', 'cidade', 'complemento'].map((field, idx) => (
            <div className='flex flex-col mb-2' key={idx}>
              <label htmlFor={field} className='mb-2'>
                {field.charAt(0).toUpperCase() + field.slice(1)}:
              </label>
              {field === 'complemento' ? (
                <textarea
                  name={field}
                  placeholder={`Digite o ${field}`}
                  className='border border-radius border-gray-600 p-0.5 mb-2 rounded text-black'
                  value={endereco[field]}
                  onChange={handleChange}
                />
              ) : (
                <input
                  type={field === 'numero' ? 'number' : 'text'}
                  name={field}
                  placeholder={`Digite o ${field}`}
                  className='border border-radius border-gray-600 p-0.5 mb-2 rounded text-black'
                  value={endereco[field]}
                  onChange={handleChange}
                />
              )}
            </div>
          ))}
          <button
            type="button"
            className='border border-radius border-black bg-cyan-700 hover:bg-cyan-900 rounded p-1 font-bold'
            onClick={addOrUpdateEndereco}
          >
            {isEditing ? 'Atualizar' : 'Adicionar'}
          </button>
        </form>
      </div>
      <div className='flex flex-col gap-5 font-bold mt-6 max-w-lg mx-auto'>
        <h2>Endereços inseridos:</h2>
        {enderecos.length > 0 ? (
          enderecos.map((end, idx) => (
            <div key={idx} className='border p-2 rounded mb-2 break-words'>
              <div>Rua: {end.rua}</div>
              <div>Número: {end.numero}</div>
              <div>Bairro: {end.bairro}</div>
              <div>Cidade: {end.cidade}</div>
              <div>Complemento: {end.complemento}</div>
              <div className='flex gap-2 mt-2'>
                <button
                  className='border border-radius border-black bg-yellow-500 hover:bg-yellow-700 rounded p-1 font-bold'
                  onClick={() => editEndereco(idx)}
                >
                  Editar
                </button>
                <button
                  className='border border-radius border-black bg-red-500 hover:bg-red-700 rounded p-1 font-bold'
                  onClick={() => deleteEndereco(idx)}
                >
                  Excluir
                </button>
              </div>
            </div>
          ))
        ) : (
          <div>Nenhum endereço inserido.</div>
        )}
      </div>
    </>
  );
};

export default Gis;
