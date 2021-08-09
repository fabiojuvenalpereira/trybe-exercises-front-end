import React from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';

import '../App.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      status: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.makeRequisition();
  }

  componentDidUpdate() {
    this.haveDog();
  }

  handleChange() {
    this.makeRequisition();
    this.setState({
      status: '',
    });
  }

  haveDog() {
    const { image } = this.state;
    const message = image.toLowerCase();
  }

  async makeRequisition() {
    const getImage = await fetch('https://dog.ceo/api/breeds/image/random');
    const resolve = await getImage.json();
    const objeto = resolve;
    this.setState({
      image: objeto.message,
      status: objeto.status,
    });
  }

  render() {
    const { image, status } = this.state;
    return (
      <div className="main-content">
        {status ? (
          <div className="dog-image">
            <img src={ image } alt="dog" />
          </div>
        ) : (
          <Loading />
        )}
        <Link className="button" onClick={ this.handleChange } to="/">
          <div>Outro</div>
        </Link>
      </div>
    );
  }
}

export default Home;
