import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { NameContext } from '../context/NameContext';

const Dashboard = () => {
  const [name] = useContext(NameContext);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center py-12 text-center">
      <p className="mb-4 text-3xl font-bold text-cyan-700">Bem-vindo, {name}!</p>
      <div className="max-w-3xl bg-gray-800 text-white rounded-lg p-6 shadow-md">
        <p className="text-lg mb-4">
          Este é o SOS, Sistema Online de Saneamento, pronto para te socorrer na organização dos serviços de manutenção e abastecimento.
        </p>
        <p className="text-lg mb-4">
          No GIS, Gerenciamento Interno de Serviços, você poderá incluir todas as características da sua cidade, adicionando bairros, ruas, CEPs, entre outros.
        </p>
        <p className="text-lg mb-4">
          Além disso, com o GIF, Gerenciamento Interno de Funcionários, você poderá ter o controle dos funcionários e direcionar os serviços para cada equipe, podendo alterar o quadro operacional a qualquer momento.
        </p>
        <p className="text-lg">
          Facilitar o seu dia-a-dia é o nosso foco, e para isso estaremos em constante evolução para melhor atendê-lo. Bom trabalho!
        </p>
      </div>
      <div className="flex justify-center mt-8 space-x-4">
        <button
          className="bg-black hover:bg-cyan-800 text-white rounded-lg py-3 px-8 font-bold border border-transparent shadow-md transition duration-300"
          onClick={() => navigate('/gis')}
        >
          GIS
        </button>
        <button
          className="bg-black hover:bg-cyan-800 text-white rounded-lg py-3 px-8 font-bold border border-transparent shadow-md transition duration-300"
          onClick={() => navigate('/gif')}
        >
          GIF
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
