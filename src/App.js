import "./App.css";
import React from "react";

import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     name: { firstName: "Vaibhav", lastName: "Sawant" },
  //     company: "ZTM",
  //   };
  // }
  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Hello {this.state.name.firstName} {this.state.name.lastName}, I work
  //           at {this.state.company}
  //         </p>
  //         <button
  //           onClick={() => {
  //             this.setState(
  //               () => {
  //                 return { name: { firstName: "Sagar", lastName: "Rao" } };
  //               },
  //               () => {
  //                 console.log(this.state);
  //               }
  //             );
  //           }}
  //         >
  //           Change name
  //         </button>
  //       </header>
  //     </div>
  //   );
  // }

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField)
    );
    console.log("App Component")
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox className={"monsters-search-box"} onChangeHandler={onSearchChange} placeholder={"Search Monsters"} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

// https://jsonplaceholder.typicode.com/users
