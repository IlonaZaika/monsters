import React from "react";
import "./App.css";
import CardList from "../../components/card-list/card-list.component";
import SearchBox from "../../components/search-box/search-box.component";

import { connect } from "react-redux";
import { updateSearchQuery } from "./reducers/searchMonstersSlice";
import { fetchMonsters } from "./reducers/monstersSlice";

class App extends React.Component {
  componentDidMount() {
    // Dispatch the thunk action to fetch users
    this.props.onFetchMonsters();
  }

  render() {
    const { monsters, searchField, onSearchChange, isPending, error } =
      this.props;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.trim().toLowerCase())
    );

    return (
      <div className="App">
        <h1 className="app-title">It's Halloween night</h1>
        <SearchBox
          className="search-box-monsters"
          placeholder="Search for guests"
          onChangeHandler={onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchField: state.search.searchField,
    isPending: state.monsters.isPending,
    monsters: state.monsters.monsters,
    error: state.monsters.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(updateSearchQuery(event.target.value)),
    onFetchMonsters: () => dispatch(fetchMonsters()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
