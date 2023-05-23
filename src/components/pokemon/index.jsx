import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import FavoriteContext from "../../contexts/favoritesContext";
import { Container,getBackgroundColor } from "./styled";

export default function Pokemon(props) {
  const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext);
  const { pokemon } = props;
  const [pokemonDetail, setPokemonDetail] = useState(null);

  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name);
  };

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`);
        setPokemonDetail(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPokemonDetail();
  }, [pokemon.id]);

  const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "💙";

  return (
    <Container type={pokemon.types[0].type.name}>
      <div className="card-top">
        <div className="image-pokemon">
          <img alt={pokemon.name} src={pokemon.sprites.front_default} />
        </div>
  
        <h3>{pokemon.name}</h3>
        <div>N: {pokemon.id}</div>
  
        {pokemonDetail && (
          <div>
            <h4>Detalles:</h4>
            <p>Altura: {pokemonDetail.height}</p>
            <p>Peso: {pokemonDetail.weight}</p>
            {/* Agrega más detalles según tus necesidades */}
          </div>
        )}
  
        {pokemon.moves && (
          <div>
            <h4>Movimientos:</h4>
            <ul>
              {pokemon.moves.slice(0, 4).map((move, index) => (
                <li key={index}>{move.move.name}</li>
              ))}
            </ul>
          </div>
        )}
  
        {pokemon.region && (
          <div>
            <h4>Región:</h4>
            <p>{pokemon.region}</p>
          </div>
        )}
      </div>
  
      <div className="card-bottom">
        {pokemon.types.map((type, index) => {
          return (
            <div
              key={index}
              className="pokemon-type-text"
              style={{ backgroundColor: getBackgroundColor(type.type.name) }}
            >
              {type.type.name}
            </div>
          );
        })}
        <button onClick={onHeartClick}>{heart}</button>
      </div>
    </Container>
  );
  
  
}
