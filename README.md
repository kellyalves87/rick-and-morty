# Rick and Morty Character Explorer

Uma aplicação React moderna para explorar personagens do Rick and Morty, construída com TypeScript e Material-UI.

![Rick and Morty Logo](./public/logo192.png)

## 🚀 Tecnologias

- React 18 com TypeScript
- Styled Components para estilização
- Material-UI para componentes
- React Query para gerenciamento de estado e cache
- Axios para requisições HTTP
- Estrutura de Design System personalizada

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/kellyalves87/rick-and-morty.git

# Entre na pasta
cd rick-and-morty

# Instale as dependências
npm install

# Inicie o projeto
npm start
```

## 🎨 Design System

O projeto utiliza um Design System consistente com:

- 🎯 Tokens de design reutilizáveis
- 🌈 Paleta de cores semântica
- 📝 Sistema de tipografia escalável
- 📏 Espaçamento e métricas consistentes
- 🔄 Animações e transições padronizadas

## 🏗 Estrutura do Projeto

```
src/
  ├── components/     # Componentes React reutilizáveis
  │   └── CharacterCards.tsx    # Componente de cards de personagens
  ├── hooks/         # Hooks personalizados
  │   └── useCharacters.tsx    # Hook para gerenciar dados dos personagens
  ├── styles/        # Sistema de design e estilos
  │   ├── GlobalStyle.ts      # Estilos globais
  │   ├── styled.d.ts         # Definições de tipos para styled-components
  │   └── theme.ts            # Configuração do tema
  ├── utils/         # Utilitários
  │   └── logger.ts           # Sistema de logging
  └── assets/        # Recursos estáticos
      └── fonts/             # Fontes personalizadas
```

## 🌟 Funcionalidades

- 🔍 Busca de personagens
- 🏷 Visualização detalhada dos personagens
- 📱 Design responsivo
- 🔄 Cache inteligente de dados com React Query
- ⚡️ Otimização de performance
- 📝 Sistema de logging para monitoramento

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.



### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
