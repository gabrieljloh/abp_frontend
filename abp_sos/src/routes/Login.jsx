import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { NameContext } from '../context/NameContext'

const Login = () => {
const navigate = useNavigate()
  const [name, setName] = useContext(NameContext);
 
  
  return (
    <div className="flex flex-col items-center py-48">
      <fieldset>
        <div className='flex flex-col items-center p-6 rounded-lg'>
            <div className='flex flex-col items-center text-3xl text-sky-950 font-bold pb-2'>
                <p>SOS</p>
                <p>Sistema Online de Saneamento</p>
            </div>
          <label className='pb-2 '
            htmlFor="name">
            Digite seu nome e senha de acesso: 
            </label>
          <input className='border border-radius border-gray-600 p-0.5 mb-4 rounded w-56' 
            type="text" 
            name="name" 
            value={name} 
            onChange={e => setName(e.target.value)}
            placeholder="Digite seu nome">
            </input>
            <input className='border border-radius border-gray-600 p-0.5 mb-4 rounded w-56' 
            required
            type="password" 
            name="senha" 
            placeholder="Digite sua senha">
            </input>
          <button className='border border-radius border-black bg-cyan-700  hover:bg-cyan-900 rounded p-1 font-bold' 
            name="Enviar" onClick={() => navigate("/dashboard")}>
            Enviar
          </button>
        </div>
      </fieldset>

    </div>
  )
}

export default Login