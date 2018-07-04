import * as React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'
import './bootstrap.min.css'

const Info = (props) => (
  <div className="container">
    <div className="info row text-primary-color">
      <div className="col-md-12">
          <i id="sidebarCollapse" className="fas fa-bars fa-lg" onClick={x => props.toggle()}>
          </i>
      </div>
    </div>
  </div>
)

const Header = () => (
  <div className="header container">
    <div className="row">
      <div className="col-md-12">
        <h1 className="home-link">
          <Link to="/" className="text-primary-color">
            Mentor Them
          </Link>
        </h1>
      </div>
    </div>
  </div>
)

const Sidebar = (props) => (
  <div className="wrapper">
    <nav id="sidebar" className="light-primary-color">

        <i id="sidebarCollapse" className="fas fa-times fa-lg sidebar-close" onClick={x => props.toggle()}>
        </i>
        <div className="sidebar-header primary-text-color">
        < h2>Task Pages</h2>
          </div>
        <ul className="list-unstyled components">
          <li><Link to="/shopping/">Shopping Cart</Link></li>
          <li><Link to="/shopping2/">Shopping Cart v2: SOLID</Link></li>
          <li><Link to="/TDD/">Intro to TDD</Link></li>
          <li><Link to="/shopping3/">Shopping cart v3: REST</Link></li>
          <li><Link to="/shopping3_5/">Shopping cart v3: Shiny front-end</Link></li>
          <li><Link to="/shopping4/">Shopping cart v4: CQRS</Link></li>
          <li><Link to="/shopping5/">Shopping cart v5: Distributed systems</Link></li>
          <li><Link to="/shopping6/">Shopping cart v6: Eventing and DDD</Link></li>
        </ul>
    </nav>

</div>
)

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string
  }
  children: any
}

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {

  public toggleSidebar(): void {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle("active");
  }


  public render() {
    return (
      <div>
        <Sidebar toggle={x => this.toggleSidebar()}/>
        <header className="dark-primary-color">
          <Info toggle={x => this.toggleSidebar()}/>
        </header>
        <header className="default-primary-color" role="banner">
          <Header />
        </header>
        <main role="main">
          <div className="container">
            <div className="row">
              <div className="col-md-12 ">
                {this.props.children()}
              </div>
            </div>
          </div>
        </main>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossOrigin="anonymous"></link>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossOrigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossOrigin="anonymous"></script>
      </div>
    )
  }
}

export default DefaultLayout
