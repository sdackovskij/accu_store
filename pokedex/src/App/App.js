import React from "react";
import Layout from "../components/LayoutComponents/PageLayout";
import { Route, Switch } from "react-router-dom";
import MyPokemons from "../container/MyPokemonsContainer";
import Pokedex from "../container/PokedexContainer";
import OnePokemon from "../container/OnePokemonContainer";

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/pokedex" exact component={Pokedex} />
          <Route path="/my-pokedex" exact component={MyPokemons} />
          <Route path="/pokemon/:id" exact component={OnePokemon} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
