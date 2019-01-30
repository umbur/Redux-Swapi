import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchSwapi } from "../actions";

class CharacterListView extends React.Component {
  constructor() {
    super();
   
  }

  componentDidMount() {
    this.props.fetchSwapi();
  }

  render() {
    {this.props.fetching ? <h2>Loading Star Wars info...</h2> : null}
    return (
      <div>
       <h2>List of Characters</h2>
       <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
       </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('characterlistview:',state);
  return {
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    fetching: state.charsReducer.fetching
  };
}

export default connect(
  mapStateToProps,
  { fetchSwapi }
)(CharacterListView);