# 📋 Vue Todo Project

Este é um projeto de lista de tarefas (ToDo) desenvolvido com **Vue 3**, utilizando **Vite** como bundler, **TailwindCSS** para o estilo e **Vuex** para gerenciamento de estado. Os dados são armazenados e simulados através do pacote **[json-server](https://github.com/typicode/json-server)**.

---

## 🛠️ Tecnologias Utilizadas

- **Vue 3**
- **Vite**
- **TailwindCSS**
- **Vuex**
- **json-server**

---

## 💻 Requisitos

- Node.js (versão 14 ou superior)
- npm (ou yarn)

---

## ⚙️ Instalação e Execução do Projeto

### 1. Clone o repositório

```sh
git clone https://github.com/seu-usuario/vue-project-todo.git
```

```sh
cd vue-project-todo
```

## 2. Instale as dependências
```sh
npm install
```
caso tenha algum erro, veja se tem uma versão do Node instalado com o comando no terminal: 
```sh
node -v
```
**Para instalar pode acessar o site oficial e instalar o [Node.js LTS](https://nodejs.org/)**

##  Inicie o servidor de desenvolvimento
```sh
npm run dev

```
_O projeto estará disponível em: http://localhost:5173_


## 🗃️ Simulando o Back-End com json-server

O projeto utiliza o json-server como banco de dados fake para simular requisições CRUD.

## 1. Instale globalmente (opcional):

```sh
npm install -g json-server
```
_Ou apenas use via NPX:_
```sh
npx json-server --watch db.json
```

## 2. A API ficará disponível em:
```
http://localhost:3000/todos
```
_O arquivo db.json simula os dados e já está incluído no projeto._

## 🤝 Como Contribuir

Ficarei feliz em receber contribuições para este projeto! Para colaborar, siga os passos abaixo:

1. **Fork** o repositório.
2. Crie uma nova **branch** com a sua funcionalidade ou correção:
   ```sh
   git checkout -b minha-nova-funcionalidade
    ```
3. Faça as alterações desejadas.

Realize o commit das suas mudanças:

 ```bash
git commit -m "Adiciona nova funcionalidade"
```

4. Faça o push para a branch:

```bash
git push origin minha-nova-funcionalidade
```

5. Abra um Pull Request explicando as alterações feitas.

## 💡 Boas Práticas
Mantenha o código limpo e organizado.
Sempre que possível, adicione comentários explicativos.
Atualize a documentação se necessário.
Teste seu código antes de enviar.

## 📬 Dúvidas ou Sugestões?
Abra uma issue para discutir melhorias, bugs ou ideias.