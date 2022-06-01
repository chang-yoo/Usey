import React from 'react';
import Home from './pages/home';
import Header from './components/navbar';
import parseRoute from './lib/parse-route.js';
import Detail from './components/detail';
import PageContainer from './components/page-container';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
    this.renderPage = this.renderPage.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: parseRoute(window.location.hash)
      });
    });
  }

  renderPage() {
    const { path } = this.state.route;
    if (path === '') {
      return <Home />;
    } else if (path === 'post') {
      return <Detail />;
    }
  }

  render() {
    return (
    <div>
      <Header />
      <PageContainer>
        {this.renderPage()}
      </PageContainer>
    </div>
    );
  }
}
