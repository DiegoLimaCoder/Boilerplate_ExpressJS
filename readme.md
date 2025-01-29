# ExpressJS + TypeScript Boilerplate

Este é um boilerplate para um projeto ExpressJS com TypeScript, com validação de variáveis de ambiente usando Joi, testes automatizados utilizando Vitest, e integração de tipos com o TypeScript. Este template é ideal para quem deseja começar rapidamente a desenvolver APIs com um ambiente já configurado e otimizado.

## Funcionalidades

- **ExpressJS**: Framework web para Node.js.
- **TypeScript**: Linguagem que adiciona tipagem estática ao JavaScript.
- **Joi**: Biblioteca para validação de variáveis de ambiente.
- **Vitest**: Ferramenta de testes automatizados.
- **Estrutura de pastas organizada** para desenvolvimento escalável.

## Pré-requisitos

- **Node.js** (v16 ou superior)
- **npm** ou **yarn**

## Instalação

1. Clone este repositório para sua máquina local:

    ```bash
    git clone https://github.com/DiegoLimaCoder/Boilerplate_ExpressJS.git
    
    cd express-typescript-boilerplate
    ```

2. Instale as dependências do projeto:

    ```bash
    npm install
    # ou
    yarn install
    ```

3. Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente necessárias:

    ```bash
    PORT=3000
    NODE_ENV="development"
    ```

## Estrutura do Projeto

A estrutura de diretórios do projeto é a seguinte:

```
express-typescript-boilerplate/
├── src/
│   ├── app.ts        # Configuração principal do Express
│   ├── env.ts        # Validação de variáveis de ambiente usando Joi
│   └── server.ts     # Inicialização do servidor
├── test/             # Arquivos de teste
│   ├── test.e2e-spec.ts         # Testes de end to end
│   ├── test.integration.spec.ts # Testes de integração
│   └── test.spec.ts             # Testes unitários simples
├── vitest.config.mts  # Configuração do Vitest
├── tsconfig.json      # Configuração do TypeScript
├── package.json       # Dependências e scripts
└── .env               # Variáveis de ambiente
```

## Scripts

Aqui estão os scripts principais definidos no `package.json`:

- **`dev`**: Inicia o servidor em modo de desenvolvimento.

    ```bash
    npm run dev
    ```

- **`build`**: Compila o código TypeScript para JavaScript.

    ```bash
    npm run build
    ```

- **`test`**: Executa os testes utilizando Vitest.

    ```bash
    npm run test
    ```

- **`test:watch`**: Executa os testes automaticamente quando há alterações no código.

    ```bash
    npm run test:watch
    ```

- **`test:cov`**: Executa os testes e gera um relatório de cobertura.

    ```bash
    npm run test:cov
    ```


## Testes

O boilerplate vem com exemplos de testes utilizando **Vitest** e **Supertest**.

### Testes de Integração (E2E)

Exemplo de teste de integração para o endpoint principal `/`:

```ts
import request from "supertest";
import { app } from "../src/app";

describe("Basic Endpoint Test", () => {
  it("should respond with status 200 for the root route", async () => {
    const res = await request(app).get("/"); // Requisição GET à rota principal
    expect(res.status).toBe(200);
  });
});
```

### Testes de Unidade

Um exemplo de teste de unidade simples:

```ts
describe('Example Test Suite', () => {
  it('should pass', () => {
    expect(1 + 1).toBe(2);
  });
});
```

## Variáveis de Ambiente

O projeto usa o pacote `dotenv` para carregar as variáveis de ambiente a partir de um arquivo `.env`. O arquivo `.env` deve conter pelo menos as seguintes variáveis:

```env
PORT=3000
NODE_ENV="development"
```
