# Grupo Transmar 

## Descrição do Projeto

Este é o site oficial do Grupo Transmar, uma empresa especializada em serviços de transporte marítimo e logística. O site foi desenvolvido para apresentar os serviços oferecidos, a história da empresa, informações de contato e uma linha do tempo dos principais marcos.

O propósito deste site é fornecer uma plataforma digital para que clientes, parceiros e interessados possam conhecer melhor o Grupo Transmar, seus valores e capacidades no setor de transporte e logística.

## Acesso ao Site em Produção

Você pode acessar o site em produção através da seguinte URL: https://saliba65.github.io/grupo-transmar/

## Screenshots

![home](image.png)
![about-us](image-1.png)
![services](image-2.png)

## Tecnologias Utilizadas

Este projeto foi construído com:

- **Vite**: Ferramenta de build rápida para desenvolvimento frontend
- **TypeScript**: Superset do JavaScript com tipagem estática
- **React**: Biblioteca para construção de interfaces de usuário
- **shadcn-ui**: Componentes de UI reutilizáveis e acessíveis
- **Tailwind CSS**: Framework CSS utilitário para estilização

## Como Rodar o Projeto Localmente

Para executar este projeto em sua máquina local, siga os passos abaixo:

### Pré-requisitos

- Node.js & npm instalados ([instale com nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Passos

1. **Clone o repositório**:
   ```sh
   git clone <https://github.com/saliba65/grupo-transmar.git>
   ```

2. **Navegue para o diretório do projeto**:
   ```sh
   cd grupo-transmar
   ```

3. **Instale as dependências**:
   ```sh
   npm install
   ```

4. **Inicie o servidor de desenvolvimento**:
   ```sh
   npm run dev
   ```

O site estará disponível em `http://localhost:8080` (ou a porta indicada no terminal).

## Como Fazer Deploy

Este projeto está configurado para deploy automático no GitHub Pages através de GitHub Actions.

### Deploy Automático

1. Faça push das suas alterações para a branch `main`:
   ```sh
   git add .
   git commit -m "Sua mensagem de commit"
   git push origin main
   ```

2. O GitHub Actions irá automaticamente:
   - Instalar as dependências
   - Construir o projeto
   - Fazer deploy para o GitHub Pages

![deploy](image-3.png)
