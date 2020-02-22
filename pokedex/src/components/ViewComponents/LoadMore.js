import React from "react";
import "../../style/scss/Card.scss";

class LoadMore extends React.Component {
  
  render() {
    return (
      <div className="center-align footer">
        <button
          className={`waves-effect waves-light btn-large red ${this.props.endOfList}`}
          onClick={() => {
             
            this.props.axiosData(this.props.onCurentPage),
              this.props.isActiveLoadMore(
                this.props.total,
                this.props.onCurentPage
              );
          }}
        >
          Load more
        </button>
      </div>
    );
  }
}

export default LoadMore;
