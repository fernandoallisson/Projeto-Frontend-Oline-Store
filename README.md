# :construction: Projeto Frontend Online Store (em grupo) :construction:
Esse projeto é uma aplicação web desenvolvida em React, que utiliza o React Router para roteamento entre páginas. O objetivo da aplicação é criar uma experiência de compra online, onde os usuários podem pesquisar produtos, visualizar detalhes dos produtos, adicionar produtos ao carrinho de compras e realizar o checkout. O projeto foi feito em grupo e utilizei dos conhecimentos em metodologia ágil para alavancar o sucesso com mais eficácia na contrução e desenvolvimento do projeto. Usamos de aplicativos como o Trello para melhor nos situarmos onde haveria o andamento do projeto.

A estrutura do projeto consiste em várias páginas, cada uma com seu próprio componente React. Aqui está uma descrição das principais partes do código:

## App.js: 
Este é o componente principal da aplicação. Ele define as rotas da aplicação usando o React Router, mapeando URLs para os componentes correspondentes das páginas. As rotas incluem uma página de pesquisa, página de carrinho de compras, página de detalhes do produto e página de checkout.

## Pages: 
As páginas da aplicação são representadas pelos componentes em src/pages. Cada página corresponde a uma rota da aplicação e inclui lógica e interface de usuário relacionadas à funcionalidade daquela página. As páginas incluem a página de pesquisa (SearchPage), página de carrinho de compras (ShoppingCart), página de detalhes do produto (ProductDetail) e página de checkout (Checkout).

## Components:
Os componentes reutilizáveis da aplicação estão localizados em src/components. Estes incluem componentes como ButtonCart, Categories, NotFoundProducts, ProductCard e ProductList. Esses componentes são usados em várias partes da aplicação para exibir produtos, interagir com o carrinho de compras e fornecer uma experiência de usuário consistente.

## Serviços (services): 
Os serviços da aplicação estão localizados em src/services. Estes incluem funções para interagir com uma API externa para obter dados de produtos e categorias (api.ts) e funções para manipular o armazenamento local do navegador para gerenciar o carrinho de compras (productStorage.ts).

## Tipos (types): 
Os tipos de dados da aplicação estão definidos em src/types. Isso inclui tipos para categorias (CategoryType) e produtos (ProductType), garantindo consistência e segurança de tipos em toda a aplicação.

# Concluindo... 
Este projeto é uma aplicação web de comércio eletrônico construída em React, com funcionalidades de pesquisa de produtos, adição ao carrinho de compras, visualização de detalhes do produto e checkout, utilizando React Router para navegação entre páginas e componentes reutilizáveis para uma experiência de usuário consistente.