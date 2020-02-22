import React from "react";
import Card from "../ViewComponents/Card";
import LoadMore from "../ViewComponents/LoadMore";
import Loading from "../ViewComponents/Loading";

export const FIRST_LOAD = 8;

class Content extends React.Component {
  componentWillMount() {
    this.props.resetPage();
    this.props.axiosData(FIRST_LOAD);
  }

  render() {
    return (
      <div>
        {this.props.pokemons.map(card => {
          return (
            <Card
              key={card.id}
              pokemon={card}
              srcImg={`http://localhost:3000/pokemons/${card.id}.png`}
              add={this.props.addToMyPokedex}
            />
          );
        })}

        {this.props.loading ? <Loading /> : null}

        <div className="clearfix"></div>

        <LoadMore
          axiosData={this.props.axiosData}
          onCurentPage={this.props.onCurentPage}
          isActiveLoadMore={this.props.isActiveLoadMore}
          total={this.props.total}
          endOfList={this.props.endOfList}
        />
      </div>
    );
  }
}

export default Content;
