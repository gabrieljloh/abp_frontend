import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import { NameContext } from '../context/NameContext'

const Dashboard = () => {

    const [name] = useContext(NameContext);
    const navigate = useNavigate()

  return (
    <div>
    <div className='flex flex-col items-center py-12 text-3xl'>
        <p className='mb-4 font-bold text-cyan-700'>Bem-vindo, {name}!</p>
        <div className='max-w-screen-sm font-semibold py-2 text-lg text-white'>
            <p>Este é o SOS, Sistema Online de Saneamento, pronto para te socorrer na organização dos serviços de manutenção e abastecimento.</p>
            <br/> 
            <p>No GIS, Gerenciamento Interno de Serviços, você poderá incluir todas as características da sua cidade, adicionando bairros, ruas, CEPs, entre outros.</p>
            <br/>
            <p>Além disso, com o GIF, o Gerenciamento Interno de Funcionários, você poderá ter o controle dos funcionários e direcionar os serviços para cada equipe, podendo alterar o quadro operacional a qualquer momento. </p>
            <br/>
            <p>Facilitar o seu dia-a-dia é o nosso foco, e para isso estaremos em constante evolução para melhor atendê-lo. Bom trabalho!</p>
        </div>
    </div>
    <div className='flex justify-center gap-4'>
        <button className='border border-radius border-black bg-black hover:bg-cyan-800 rounded py-4 px-10 font-bold' 
            name="GIS" onClick={() => navigate("/gis")}>
            GIS
          </button>
          <button className='border border-radius border-black bg-black hover:bg-cyan-800 rounded py-4 px-10 font-bold' 
            name="GIF" onClick={() => navigate("/gif")}>
            GIF
          </button>
    </div>
    </div> 

  )
}

export default Dashboard