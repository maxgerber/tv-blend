import React, { Component } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import CSSModules from 'react-css-modules';

import Home from './components/Home';
import Show from './components/Show';
import TvItem from './components/tvItem';
// import dummyHomeData from './data/dummyHomeData.json';

import styles from './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 'home',
      schedule: [],
      tvShowData: null,
      selectedShowId: null,
      err: null,
    };
    this.selectShow = this.selectShow.bind(this);
    this.mapTvItemDiv = this.mapTvItemDiv.bind(this);
    this.retrieveShow = this.retrieveShow.bind(this);
  }
  componentDidMount() {
    // this.setScheduleState(dummyHomeData);
    this.retrieveSchedule();
  }

  setScheduleState(json) {
    this.setState({
      schedule: json.slice(0, 18),
    });
  }

  selectShow(id) {
    this.setState({
      selectedShowId: id,
      currentPage: 'show',
    }, () => {
      this.retrieveShow();
    });
  }

  retrieveShow() {
    fetch(`http://api.tvmaze.com/shows/${this.state.selectedShowId}`)
      .then(res => { return res.json(); })
      .then(json => {
        this.setState({
          tvShowData: json,
        });
      });
    // .catch(err => { return this.setState({ err }); });
  }

  retrieveSchedule() {
    fetch('https://api.tvmaze.com/schedule?country=GB')
      .then(res => { return res.json(); })
      .then(json => { return this.setScheduleState(json); })
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
              render={() => { return <Show contents={this.state.tvShowData} />; }}
            />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default CSSModules(App, styles);
