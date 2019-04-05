# Movie Docs

Esse é um aplicativo para busca de filmes

## Start the app
1. Deve ter instalado o `npm`
2. Instale `yarn` rodando `npm install -g yarn`
3. Após instalação do yarn, rode `yarn install`. Verifique que você esteja na pasta filmes.
4. Crie na pasta filmes um arquivo chamado `.env` e coloque aí `REACT_APP_OMDB_API=xxxx`. Mude os xxxx pelo valor enviado a seu email.
5. Rode `yarn start`.

## Rodar o Storybook
1. Na pasta filmes, rode o comando `yarn storybook`.

## Premissas do projeto
1. Se poderá obter todos os dados dos filmes da API OMDB.


## Decisões do projeto
1. No UI se vai usar Bulma.io para evitar complicar o desenho da app.
2. Se vai usar Storybook para o desenvolvemento de cada componente de UI.
3. O fetch na API será feito com 'axios'.
4. Na estrutura só vai ter duas páginas que vai re-utilizar o componente `MovieTile` para mostrar a informação do filme.
5. Se vai utilizar o id da IMDB como id para a tela do filme.
6. Para calcular os ratings, vi que só tem 3 fuentes: IMDB, Meta Critic e Rotten Tomatoes. O problema que vi é que os três mostram a informação de maneira diferente. Porém, teve que fazer um switch para cada.
7. Decidi não criar branch por feature por causa do pouco tempo do projeto, além do tamano do projeto.