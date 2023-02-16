<h1 align="center"> VIP </h1>

## *Membros do Grupo:*
* Pedro Fonseca Rodrigues de Sousa | Matrícula: 202110165

* Raissa Rezende Oliveira | Matrícula: 202110162

* Vitor Pires Zini | Matrícula: 202110169

## *Descrição do Problema:*

Uma loja no interior de Minas Gerais chamada NJack percebeu durante a pandemia de COVID o quão importante é estar presente na internet e nas redes sociais, pois mesmo sem a presença física dos clientes, é importante que a loja esteja divulgando seus produtos. Desse modo, o dono desse comércio está tentando alcançar novos patamares por meio de um site que permite a visualização e descrição de seus respectivos produtos (uma espécie de mostruário).

## *O que o sistema deverá fazer:*

O site terá por objetivo mostrar os diversos produtos da loja, assim como verificar a quantidade de itens disponíveis no estoque, além de possibilitar a inserção de itens em um carrinho de compras. O site da loja estará dividido em categorias (exemplo: masculino, feminino, infantil), e também será permitida a busca de um produto específico. Por fim será necessário que o cliente tenha uma conta para realizar a compra dos produtos, entretanto não é necessário uma conta para visualizar os produtos.

## *Tipos de usuário previstos:*

- Cliente
- Administrador

## *Principais funcionalidades:*

*Funcionalidades envolvendo 1 tabela:*

- O sistema deve ser capaz de cadastrar produtos
- O sistema deve ser capaz de buscar produtos
- O sistema deve ser capaz de remover produtos
- O sistema deve ser capaz de alterar produtos

*Funcionalidade envolvendo 3 ou mais tabelas:*

- O sistema deve ser capaz de cadastrar vendas
- O sistema deve ser capaz de buscar vendas
- O sistema deve ser capaz de remover vendas
- O sistema deve ser capaz de alterar vendas

*Funcionalidade opcionais:*

- O sistema deve ser capaz de cadastrar endereços
- O sistema deve ser capaz de remover endereços
- O sistema deve ser capaz de cadastrar clientes
- O sistema deve ser capaz de remover clientes

## *Estruturas do diretório:*

-> Loja (pasta principal)

&emsp;&emsp; –> Controllers

&emsp;&emsp; –> Model

&emsp;&emsp; –> Persistence

&emsp;&emsp; –> View

&emsp;&emsp; –> Routes

&emsp;&emsp; –> Services


## *Tecnologias Utilizadas:*

* HTML5
* CSS3
* Java Script ES2022 
* POSTGRE15.2
* NODE.JS 18.13.0 LTS

## *Regras de uso do Git:*

*Funções de cada pasta do projeto*

* Pasta routes: Deve possuir arquivos em javascript que contenham as rotas que referenciam os métodos a serem utilizados pelo controlador.

* Pasta controller: Deve possuir arquivos que estabelecem a conexão entre as rotas e os serviços.

* Pasta service: Deve possuir arquivos em javascript que contenham as regras de negócios do projeto e enviam a requisição recebida para os arquivos de persistência de dados.

* Pasta persistence: Deve possuir arquivos em javascript que estabelecem a conexão entre os serviços e o banco de dados.

* Pasta views: Deve possuir arquivos em html e css que representam as interfaces do site.

*Regras de commit*

* Os commits devem ser enviados com mensagens claras e bem definidas.

*Regras de issue*

* As issues estabelecidas no git-hub devem estar coerente com o progresso do projeto.