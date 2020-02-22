import React from "react";
import { withRouter } from "react-router-dom";
import "../../style/scss/Card.scss";
import imgError from "./ImgError";

class Card extends React.Component {
  clickHandler = e => {
    e.stopPropagation();
    this.props.add(this.props.pokemon.name, this.props.pokemon.id);
  };

  render() {
    return (
      <div className="row">
        <div className="col s12 m4 l3 center-align">
          <div
            className="card waves-effect hoverable "
            onClick={() => {
              this.props.history.push("/pokemon/" + this.props.pokemon.id);
            }}
          >
            <div className="card-image">
              <img
                className="cardImg"
                src={this.props.srcImg} 
                onError={e => imgError(e)}
              />
              <a
                className={`btn-floating halfway-fab waves-effect waves-light red ${
                  this.props.pokemon.isMy ? "disabled" : ""
                }`}
                onClick={e => this.clickHandler(e)}
              >
                <i className="material-icons">add</i>
              </a>
            </div>
            <div className="card-content">{this.props.pokemon.name}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Card);
