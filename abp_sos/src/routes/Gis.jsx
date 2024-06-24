import React from 'react'
import { useState } from 'react'


const Gis = () => {
  
  const [rua, setRua] = useState([]) 
  const [numero, setNumero] = useState([])
  const [bairro, setBairro] = useState([])
  const [cidade, setCidade] = useState([])
  const [complemento, setComplemento] = useState([])

  const [addRua, addSetRua] = useState([]) 
  const [addNumero, addSetNumero] = useState([])
  const [addBairro, addSetBairro] = useState([])
  const [addCidade, addSetCidade] = useState([])
  const [addComplemento, addSetComplemento] = useState([])

  function addEnd() {
    addSetRua([...addRua, rua])
    addSetNumero([...addNumero, numero])
    addSetBairro([...addBairro, bairro])
    addSetCidade([...addCidade, cidade])
    addSetComplemento([...addComplemento, complemento])
  }

  const preventDefault = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <div className='flex flex-col items-center'>
          <h2 className='text-xl'>Inserir novo endereço:</h2>
          <form className='max-w-lg w-full mx-0 my-auto' onSubmit={(e) => preventDefault(e)}>
            <div className='flex flex-col mb-2 '> 
              <label htmlFor="rua" className='mb-2'>Rua:</label>
              <input 
              type="text" 
              name="rua" 
              placeholder='Digite o nome da rua'
              className='border border-radius border-gray-600 p-0.5 mb-2 rounded text-black'
              onChange={(e) => {setRua(e.target.value)}}
              />
            </div>
            <div className='flex flex-col mb-2'>
              <label htmlFor="numero" className='mb-2'>Número:</label>
              <input 
              type="number" 
              name="numero" 
              placeholder='Digite o numero do imovel'
              className='border border-radius border-gray-600 p-0.5 mb-2 rounded text-black'
              onChange={(e) => setNumero(e.target.value)}
              />
            </div>
            <div className='flex flex-col mb-2'>
              <label htmlFor="bairro" className='mb-2'>Bairro:</label>
              <input 
              type="text" 
              name="bairro" 
              placeholder='Digite o nome do bairro'
              className='border border-radius border-gray-600 p-0.5 mb-2 rounded text-black'
              onChange={(e) => setBairro(e.target.value)}
              />
            </div>
            <div className='flex flex-col mb-2'>
              <label htmlFor="rua" className='mb-2'>Cidade</label>
              <input type="text" 
              name="cidade" 
              placeholder='Digite o nome da cidade' 
              className='border border-radius border-gray-600 p-0.5 mb-2 rounded text-black'
              onChange={(e) => setCidade(e.target.value)}
              />
            </div>
            <div className='flex flex-col mb-2'>
              <label htmlFor="rua" className='mb-2'>Complemento</label>
              <textarea 
              name="complemento" 
              placeholder='Digite um complemento do endereço' 
              className='border border-radius border-gray-600 p-0.5 mb-2 rounded text-black'
              onChange={(e) => setComplemento(e.target.value)}
              />
            </div>
            <button type="button"className='border border-radius border-black bg-cyan-700  hover:bg-cyan-900 rounded p-1 font-bold' 
                name="Enviar"
                onClick={() => addEnd()}
                >
                Enviar
              </button>
          </form>
        </div>
        <div className='flex flex-col gap-5 font-bold'>
          <h2>Endereços inseridos:</h2>
          <div>
            {addRua.map((rua) => (
                      <div>
                          <div> Rua: {rua}</div>
                      </div>       
              ))}
            {addNumero.map((numero) => (
                      <div>
                          <div> Numero: {numero}</div>
                      </div>       
              ))}
            {addBairro.map((bairro) => (
                      <div>
                          <div> Bairro: {bairro}</div>
                      </div>       
              ))}
            {addCidade.map((cidade) => (
                      <div>
                          <div> Cidade: {cidade}</div>
                      </div>       
              ))}
            {addComplemento.map((complemento) => (
                      <div>
                          <div> Complemento: {complemento}</div>
                      </div>       
              ))}
          </div>
      </div>
    </>
  )
}
export default Gis