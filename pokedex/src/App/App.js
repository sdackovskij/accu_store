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
          <Route path="/my-pokedex"  component={MyPokemons} />
          <Route path="/pokemon/:id"  component={OnePokemon} />
          <Route path="/" component={Pokedex} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
