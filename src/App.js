import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import TvItem from './components/tvItem';
// import dummyHomeData from './data/dummyHomeData.json';

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
    });
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
      <main styleName="App">
        <header styleName="header">
          <h1>TV Blender</h1>
        </header>
        {this.state.err ? <p>{this.state.err}</p> : ''}
        <section styleName="schedule">{this.mapTvItemDiv()}</section>
      </main>
    );
  }
}

export default CSSModules(App, styles);
