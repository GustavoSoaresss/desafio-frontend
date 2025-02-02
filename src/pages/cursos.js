import React from 'react';
import { navigate } from 'gatsby';

import Layout from '../components/layout';
import CursosList from '../components/cursos-list';

class CursosPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  componentWillMount() {
    const { isLoggedIn } = this.props.location.state
      ? this.props.location.state
      : false;
    this.setState({ isLoggedIn: isLoggedIn });
  }

  render() {
    const { isLoggedIn } = this.state;
    if (!isLoggedIn && window.location.pathname !== `/`) {
      navigate(`/`);
      return null;
    }

    return (
      <Layout>
        <CursosList />
      </Layout>
    );
  }
}

export default CursosPage;
