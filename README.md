# 🌤️ Consulta Clima

Este é um projeto simples de consulta do clima de cidades utilizando a [API OpenWeatherMap](https://openweathermap.org/) para exibir os dados meteorológicos e a [API Unsplash](https://unsplash.com/developers) para buscar imagens da cidade correspondente, tornando a experiência mais visual e atrativa.

## 📷 Demonstração

O usuário digita o nome de uma cidade e o site exibe:
- Nome da cidade e país
- Temperatura atual, mínima e máxima
- Umidade e velocidade do vento
- Ícone de clima atual
- Uma imagem ilustrativa da cidade como plano de fundo

## 📁 Estrutura de Arquivos

📦 Projeto  
├── index.html  
├── style.css  
├── script.js  
├── config.js  
├── config.example.js  
└── .gitignore  

## 🔐 Ocultação de Chaves (Segurança)

As chaves das APIs são armazenadas no arquivo `config.js`, que não é versionado no Git graças à entrada no `.gitignore`. Para evitar o vazamento de dados sensíveis, você pode seguir este processo:

1. Crie um arquivo chamado `config.js` na pasta `JS/` (caso não exista).
2. Copie o conteúdo do `config.example.js`:

```js
const WEATHER_KEY = "SUA_CHAVE_WEATHER_AQUI";
const PHOTO_KEY = "SUA_CHAVE_UNSPLASH_AQUI";
```

3. Substitua pelos seus dados reais:

```js
const WEATHER_KEY = "sua_chave_real_openweather";
const PHOTO_KEY = "sua_chave_real_unsplash";
```

O arquivo `config.js` é carregado antes do `script.js` no `index.html`, permitindo que suas chaves sejam acessadas por todo o código JavaScript sem expô-las no repositório.

## ⚙️ Como usar

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. Instale uma extensão de servidor local, como o Live Server do VS Code, e execute o projeto.

3. Crie seu arquivo `config.js` conforme explicado acima.

4. Pronto! Basta digitar o nome de uma cidade para consultar o clima.

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- OpenWeatherMap API
- Unsplash API
- Font Awesome

## 🚫 Aviso

Este projeto é apenas para fins de aprendizado. Não exponha suas chaves públicas em deploys abertos sem proteção (ex: Vercel, Netlify). Prefira soluções com variáveis de ambiente no backend quando possível.

## 📄 Licença

Este projeto está licenciado sob a licença MIT.
