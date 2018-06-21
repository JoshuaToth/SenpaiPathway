import * as React from 'react'
import Link from 'gatsby-link'

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

export default class extends React.Component<IndexPageProps, {}> {
  constructor(props: IndexPageProps, context: any) {
    super(props, context)
  }
  public render() {
    return (
      <div>
        <h1>Hi Mentors!</h1>
        <p className="secondary-text-color">
          Welcome to a site that takes the guess work out of helping Mentees grow.
          <br /> 
          To get started: begin with Shopping 1 below</p>
        <ul>
          <li><Link to="/shopping/">Shopping Cart</Link></li>
          <li><Link to="/shopping2/">Shopping Cart v2: SOLID</Link></li>
          <li><Link to="/TDD/">Intro to TDD</Link></li>
          <li><Link to="/shopping3/">Shopping cart v3: REST</Link></li>
          <li><Link to="/shopping3_5/">Shopping cart v3: Shiny front-end</Link></li>
          <li><Link to="/shopping4/">Shopping cart v4: CQRS</Link></li>
          <li><Link to="/shopping5/">Shopping cart v5: Distributed systems</Link></li>
          <li><Link to="/shopping6/">Shopping cart v6: Eventing and DDD</Link></li>
        </ul>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
