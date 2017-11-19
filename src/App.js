import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import CSSModules from 'react-css-modules';

import Home from './components/Home';
import Show from './components/Show';
import TvItem from './components/tvItem';

import styles from './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'home',
      schedule: [],
      selectedShowId: null,
      err: null,
    };
    this.selectShow = this.selectShow.bind(this);
    this.mapTvItemDiv = this.mapTvItemDiv.bind(this);
  }
  componentDidMount() {
    this.retrieveSchedule();
  }

  selectShow(id) {
    this.setState({
      selectedShowId: id,
      currentPage: 'show',
    });
  }

  retrieveSchedule() {
    fetch('https://api.tvmaze.com/schedule?country=GB')
      .then(res => { return res.json(); })
      .then(json => {
        this.setState({
          schedule: json.slice(0, 18),
        });
      })
      .catch((err) => { return this.setState({ err }); });
  }

  mapTvItemDiv() {
    return this.state.schedule.map((tvData) => {
      return <TvItem key={tvData.id} tvData={tvData} updateState={this.selectShow} />;
    });
  }
  render() {
    return (
      <Router>
        <main styleName="App">
          <header styleName="header">
            <h1>TV Blender</h1>
          </header>
          {this.state.err ? <p>{this.state.err}</p> : ''}
          <Switch>
            <Route
              exact
              path="/"
              render={() => { return <Home contents={this.mapTvItemDiv} />; }}
            />
            <Route
              exact
              path="/show"
              render={() => { return <Show />; }}
            />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default CSSModules(App, styles);
