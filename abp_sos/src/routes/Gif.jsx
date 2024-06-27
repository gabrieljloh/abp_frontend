import React, { useState } from 'react';

const Gif = () => {
  const [funcionario, setFuncionario] = useState({
    nome: '',
    idade: '',
    telefone: '',
    funcao: ''
  });
  const [funcionarios, setFuncionarios] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFuncionario({
      ...funcionario,
      [name]: value
    });
  };

  const addOrUpdateFuncionario = () => {
    if (!funcionario.nome || !funcionario.idade || !funcionario.telefone || !funcionario.funcao) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    if (isEditing) {
      const updatedFuncionarios = [...funcionarios];
      updatedFuncionarios[editIndex] = funcionario;
      setFuncionarios(updatedFuncionarios);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setFuncionarios([...funcionarios, funcionario]);
    }
    setFuncionario({
      nome: '',
      idade: '',
      telefone: '',
      funcao: ''
    });
  };

  const editFuncionario = (index) => {
    setFuncionario(funcionarios[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const deleteFuncionario = (index) => {
    const updatedFuncionarios = funcionarios.filter((_, i) => i !== index);
    setFuncionarios(updatedFuncionarios);
  };

  return (
    <>
      <div className='flex flex-col items-center'>
        <h2 className='text-xl mb-4'>{isEditing ? 'Editar funcionário' : 'Adicionar novo funcionário'}:</h2>
        <form className='max-w-lg w-full mx-0 my-auto'>
          {['nome', 'idade', 'telefone', 'funcao'].map((field, idx) => (
            <div className='flex flex-col mb-2' key={idx}>
              <label htmlFor={field} className='mb-2'>
                {field.charAt(0).toUpperCase() + field.slice(1)}:
              </label>
              <input
                type={field === 'idade' ? 'number' : 'text'}
                name={field}
                placeholder={`Digite o ${field}`}
                className='border border-radius border-gray-600 p-0.5 mb-2 rounded text-black'
                value={funcionario[field]}
                onChange={handleChange}
              />
            </div>
          ))}
          <button
            type="button"
            className='border border-radius border-black bg-cyan-700 hover:bg-cyan-900 rounded p-1 font-bold'
            onClick={addOrUpdateFuncionario}
          >
            {isEditing ? 'Atualizar' : 'Adicionar'}
          </button>
        </form>
      </div>
      <div className='flex flex-col gap-5 font-bold mt-6 max-w-lg mx-auto'>
        <h2>Funcionários cadastrados:</h2>
        {funcionarios.length > 0 ? (
          funcionarios.map((func, idx) => (
            <div key={idx} className='border p-2 rounded mb-2 break-words'>
              <div>Nome: {func.nome}</div>
              <div>Idade: {func.idade}</div>
              <div>Telefone: {func.telefone}</div>
              <div>Função: {func.funcao}</div>
              <div className='flex gap-2 mt-2'>
                <button
                  className='border border-radius border-black bg-yellow-500 hover:bg-yellow-700 rounded p-1 font-bold'
                  onClick={() => editFuncionario(idx)}
                >
                  Editar
                </button>
                <button
                  className='border border-radius border-black bg-red-500 hover:bg-red-700 rounded p-1 font-bold'
                  onClick={() => deleteFuncionario(idx)}
                >
                  Excluir
                </button>
              </div>
            </div>
          ))
        ) : (
          <div>Nenhum funcionário cadastrado.</div>
        )}
      </div>
    </>
  );
};

export default Gif;
