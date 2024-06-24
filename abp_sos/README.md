# abp_frontend

Nome/Título do Projeto: SOS - Sistema Online de Saneamento 🆘

Lista de Integrantes da Equipe: Gabriel Jorge Lóh, Lucas Magagnin, Luan Cardoso da Silva, Paulo Henrique de Souza Candido

Descrição do Projeto: O produto consiste em um software para gestão de serviços de manutenção de redes e ligações de abastecimento de água e coleta de esgoto, facilitando a organização das prioridades a serem executadas.

Objetivo do Projeto: Visto que com o acelerado crescimento das cidades em números de moradores e estabelecimentos comerciais, diversas ligações novas de abastecimento de água e coleta de esgoto passaram a surgir neste mesmo ritmo, trazendo a necessidade de um sistema capaz de faciliar o cadastramento dos serviços relacionados a criação de novas ligações, como também a manutenção das redes já existentes que tendem a sofrer com maior desgaste devido ao maior consumo/descarte de fluidos.

Estrutura do Projeto: O software se utiliza de 02 sistemas para controle e divisão de serviços. O esquema do sistema 01 consiste em:
<ul>
  <li>Login: Ao abrir o software no navegador, o usuário obrigatóriamente precisa informar um login e senha para avançar para a próxima tela;</li>
  <li>Cadastro de ASs (Autorizações de Serviços): Tela onde o usuário irá cadastrar as informações essênciais do serviço a ser executado, como: tipo de serviço, localização (CEP, logradouro, bairro, cidade), dados do solicitante (caso seja um serviço em residência), descrição do problema, etc.</li>
  <li>Consulta de ASs: O usuário poderá consultar uma lista com todas as ASs criadas, filtrando por bairro, logradouro, tipo de serviço, nome do solicitante, código do serviço. Além disso o usuário poderá excluir ou alterar informações presentes nas ASs.</li>  
</ul>

O sistema 02 é composto de:
<ul>
  <li>Programação de manutenção: Onde o usuário poderá dividir as ASs para as equipes disponíveis, montando a rota de serviço para cada equipe;</li>
  <li>Atualização de andamento do serviço: Enquanto as equipes operacionais executam as ASs, o usuário poderá atualizar o andamento dos serviços, acrescentando ou retirando informações que julgar necessárias para possível verificação posterior;</li>
  <li>Situação do serviço: Caso o serviço tenha sido executado ou não haja mais necessidade de execução, o usuário poderá dar baixa na ASs, retirando a mesma da lista de serviços a fazer;</li>
</ul>

"Cliente" ou Público-alvo: Com o crescimento exponencial das cidades e consequente aumento do consumo de água tratada e descarte de esgoto residencial, entende-se a necessidade de automatizar o controle dos serviços de manutenção e abastecimento de redes e cavaletes. Com isso, é de grande importância para empresas que lidam com saneamento e abastecimento de água, privadas ou estatais, que possuam um software capaz de integrar as demandas recorrentes da população com o controle de funcionários no âmbito operacional, buscando aumento na efetividade dos serviços prestados, reduzindo perdas principalmente advindas da desorganização, que acarretam em tempo perdido para atender solicitações muitas das vezes emergenciais.

Tecnologias, bibliotecas e frameworks: A princípio será utilizado React com Vite.js, juntamente com Ant Design como opção para o CSS.

Características/diferenciais importantes do projeto: O sistema 01 contará com uma área de cadastro e alteração de endereços, sendo possível incluir novas ruas e bairros. Dentro do sistema 02, focado na divisão e execução dos serviços, haverá uma tela de cadastro dos funcionários que trabalham nos setores operacionais, com a possibilidade de alteração do quadro.

