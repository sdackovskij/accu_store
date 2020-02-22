import React from "react";
import imgError from "./ImgError";
import "../../style/scss/Card.scss";


class OnePokemon extends React.Component {
        
    render() {
        const ID = this.props.match.params.id;
        const pokemon = this.props.pokemons.find(item => item.id == ID);  
    return (
        <div className="row">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-image">
              <img
                            src={`http://localhost:3000/pokemons/${ID}.png`}
                onError={e => imgError(e)}
              />
                        <span className="card-title"></span>
            </div>
          </div>
        </div>
        <div className="col s12 m6">
          <div className="card-panel teal">
                    <h2 className="white-text">{pokemon.name} </h2>
                    <h4 className="white-text">Pokemon ID: {ID} </h4>
                    <h4 className="white-text">Status: {pokemon.isMy ? `Catched ${new Date((pokemon.date)).toLocaleDateString()}` :"Not catched"} </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default OnePokemon ;
