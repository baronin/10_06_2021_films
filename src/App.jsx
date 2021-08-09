import { Component } from "react";
import _sortBy from "lodash/sortBy";
import FilmsList from "pages/FilmsPage/components/FilmsList";
import { films } from "data";

class App extends Component {
  state = {
    films: [],
  };

  sortFilms = (films) => _sortBy(films, ["title"]);

  componentDidMount() {
    this.setState({ films: this.sortFilms(films) });
  }

  onReset = () => this.setState({ films });

  render() {
    const { films } = this.state;
    return (
      <div className="ui container">
        <FilmsList films={films} />
      </div>
    );
  }
}

export default App;
