import * as React from 'react';
import Link from 'gatsby-link';
import {Helmet} from "react-helmet";

import './index.css'
import './bootstrap.min.css'

const Info = () => (
  <div className="container">
    <div className="info row text-primary-color">
      <div className="col-md-12">
        <a target="blank" href="https://www.twitter.com/tothjoshuaj">
          <i className="fab fa-twitter fa-5 text-primary-color link-icon" />
        </a>
        <a target="blank" href="https://github.com/JoshuaToth/SenpaiPathway">
          <i className="fab fa-github fa-5 text-primary-color link-icon" />
        </a>
      </div>
    </div>
  </div>
)

const Header = () => (
  <div className="header container">
    <div className="row">
      <Info />
      <div className="col-md-12">
        <h1 className="home-link">
          <Link to="/" className="text-primary-color">
            Senpai Pathway
          </Link>
        </h1>
        <h4 className="text-primary-color">A Practical Guide For Mentors</h4>
      </div>
    </div>
  </div>
)

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string
  }
  children: any
}

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
  public render() {
    return (
      <div>
        <Helmet>
          <link rel="icon" href={`${require('../images/icon.png')}`} />
        </Helmet>
        <header role="banner">
          <Header />
        </header>
        <main role="main">
          <div className="container">
            <div className="row">
              <div className="col-md-12 ">{this.props.children()}</div>
            </div>
          </div>
        </main>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
          integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
          crossOrigin="anonymous"
        />
        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
          integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
          crossOrigin="anonymous"
        />
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"
          integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T"
          crossOrigin="anonymous"
        />
      </div>
    )
  }
}

export default DefaultLayout
