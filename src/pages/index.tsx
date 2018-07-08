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
          A site that takes the guess work out of helping your pupils grow.
          <br /> 
          Sed vehicula commodo risus vel dignissim. Quisque tincidunt a est in eleifend. Aenean ultrices enim et erat lobortis, eget maximus nisi mollis. Phasellus sodales eget tortor at blandit. Nulla et eros finibus, eleifend eros vel, rutrum enim. Aenean aliquet eros quis tortor elementum mollis. Sed sit amet leo id nisi ornare aliquet.
          <br/>
          <br/>
          Duis non fermentum metus, ac pellentesque ante. Integer non velit magna. Etiam eu convallis velit, ac laoreet nisl. Nunc non orci non leo ullamcorper posuere a ac est. Nullam dapibus enim et lacus varius, vel semper risus dignissim. Etiam pretium ante ac dui blandit consequat. Fusce consequat lacinia tortor id viverra. Vivamus tincidunt, ex sed dictum eleifend, ligula tortor aliquam mauris, ac ullamcorper magna est eu ante. Morbi ullamcorper, tellus eget ornare iaculis, purus mi facilisis ligula, ut hendrerit tortor lacus id dui. Donec ut libero mi. Phasellus egestas arcu quis erat vehicula varius. Duis bibendum egestas sapien, sit amet interdum nisl lobortis vel. In nec orci at enim iaculis convallis. Ut lacus mi, suscipit ac pellentesque eu, dictum molestie arcu.
          </p>
          <h2>Getting started</h2>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4'>
                <Link to="/developers/">
                  <img src={ require('../images/code-coding-computer-34676.jpg') } />
                  <h3>
                    Developers
                  </h3>
                </Link>
              </div>
              <div className='col-md-4'>
                <Link to="/developers/">
                  <img src={ require('../images/bandwidth-close-up-computer-1148820.jpg') } />
                  <h3>
                    Devops
                  </h3>
                </Link>
              </div>
              <div className='col-md-4'>
                <Link to="/developers/">
                  <img src={ require('../images/apple-computer-decor-326502.jpg') } />
                  <h3>
                    Designers
                  </h3>
                </Link>
              </div>
              <div className='col-md-4'>
                <Link to="/developers/">
                  <img src={ require('../images/blur-cellphone-close-up-196644.jpg') } />
                  <h3>
                    UX/UI
                  </h3>
                </Link>
              </div>
            </div>
          </div>
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
