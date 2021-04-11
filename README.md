# ApolloBackendPokemonTypescript

## Descrição

Aplicação backend com apollo-server, graphql e mongoose.

## Tarefas

<ol>
    <li>Script para povoar um banco ed dados com o conteudo de pokemon.csv :heavy_check_mark:</li>
    <li>Criar uma query em graphql que permita a escolha aleatoria de até 10 pokemons :heavy_check_mark:
        <ul>
            <li>Delimitar as escolhas por filtros :heavy_check_mark:
            <ul>
            <li>generation ("1", "2", "3", etc)</li>
            <li>is_legendary ("0" para falso, "1" para verdadeiro)</li>
            <li>type1 ("fire", "water", etc)</li>
            <li>type2 ("fire", "water", etc)</li>
            <li>abilities (["ability_name_1"],["ability_name_1","ability_name_2"],["ability_name_1","ability_name_2","ability_name_3"])</li>
            </ul>
            </li>
            <li>Salvar a lista com os pokemons sorteados em uma collections :heavy check_mark:</li>
        </ul>
    </li>
    <li>Extras
        <ul>
            <li>Upload de fotos para os registros de pokemons :x:</li>
            <li>Cadastro de treinadores, que podem possuir até 7 pokemons :heavy_check_mark:</li>
        </ul>
    </li>
</ol>


## Database

https://www.mongodb.com/cloud/atlas

## Instalação

<code>npm i</code>

## Arquivo .env
<code>
DB_HOST=<br/>
DB_USER=<br/>
DB_PASS=<br/>
DB_NAME=<br/>
</code>

## Iniciar aplicação

### dev
<code>npm run start:dev</code>

### production
<code>npm run start</code>