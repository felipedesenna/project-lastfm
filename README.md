<h1 align="center">
Projeto - LastFM
</h1>

# Índice

- [Documentação do projeto](#doc)
- [Como usar](#como-usar)
- [Bibliotecas utilizadas](#lib)

<a id="doc"></a>

## :memo: Documentação do projeto

O projeto foi desenvolvido para possibilitar a consulta de artistas e álbuns da API LastFM.
No sistema é possivel realizar o cadastro do usuário na memória do browser, efetuar login, pesquisar artistas, pesquisar álbuns e verificar o histórico de pesquisa de artistas e álbuns.

O projeto foi criado com ReactJS, a estrutura base foi criada com o **create-react-app** que é sugerido pela equipe do React e ContextAPI para suprir o uso do Redux.

- Tela login: é possivel efetuar o login de um usuário cadastrado ou criar um usuário, o login é validado de acordo com o usuário que foi cadastrado na memória do browser.

- Tela cadastro de usuário: essa tela é para criar um usuário que ainda não está cadastrado no sistema salvando na memória do browser.

- Tela artistas: tela utilizada para pesquisar artista na API LastFM.

- Tela álbuns: tela utilizada para pesquisar álbum na API LastFM.

- Tela histórico de pesquisas: tela onde é possivel listar o histórico de pesquisa do usuário de artistas e álbuns e que foram salvos na memória do browser.

<a id="como-usar"></a>

## :computer: Como usar

1 - Faça o download ou clone do projeto:

```sh
  $ git clone https://github.com/felipedesenna/project-lastfm.git
```

2 - Executando o projeto:

```sh
  # Instale as dependências do projeto
  $ npm install / yarn

  ## Aplicação web
  $ npm start / yarn start
```

<a id="lib"></a>

## :white_check_mark: Bibliotecas utilizadas

Para o projeto foram utilizadas as seguintes bibliotecas:

- **`@unform/core e @unform/web`**: Biblioteca utilizada para a manipulação de formulários dentro do React, ela é sustentada pela equipe da **[Rocketseat](https://unform.dev/)**.

- **`Axios`**: Biblioteca que é utilizada para fazer requisições HTTP client no browser, confira mais informações **[Axios](https://github.com/axios/axios)**

- **`Polished`**: Utilizada para trabalhar com efeitos no CSS como por exemplo sombreamento de cor. **[Polished](https://github.com/styled-components/polished)**

- **`React`**: Biblioteca para criação de interfaces do sistema. **[React](https://pt-br.reactjs.org/)**

- **`React-icons`**: Biblioteca de icones, utilizada para melhorias na interface e experiência do usuário. **[React-icons](https://github.com/react-icons/react-icons)**

- **`React-router-dom`**: Biblioteca utilizada para realizar o redirecionamento de rotas ou páginas dentro do sistema. **[React-router-dom](https://reactrouter.com/web/guides/quick-start)**

- **`Styled-components`**: Biblioteca para criação e desenvolvimento do CSS dentro do React. **[Styled-components](https://styled-components.com/)**

- **`Typescript`**: Utilizado no desenvolvimento para criação de tipagem no projeto, tornando o sistema mais eficiente e evitando erros futuros. **[Typescript](https://www.typescriptlang.org/)**

- **`Uuidv4`**: Utilizado para criar IDs de forma mais eficiente. **[Uuidv4](https://github.com/thenativeweb/uuidv4)**

- **`Yup`**: Biblioteca utilizada para validação de formulário. **[Uuidv4](https://github.com/jquense/yup)**

- ### **Observação**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/download/)** instalado na máquina e para gerenciar os pacotes da aplicação o **[NPM](https://www.npmjs.com/get-npm)** ou **[Yarn](https://yarnpkg.com/getting-started/install)**.
  - É muito **importante** estar com a api em execução, assim como o banco de dados configurado para fazer a navegação no sistema.
  - Também é recomendavél utilizar uma versão do NodeJS 11 ou superior.
