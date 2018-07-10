import * as React from 'react'

import { SectionTile } from '../components/section-tile';

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
          <div className='container-fluid'>
            <div className='row'>
              <SectionTile link='/developers/' title='Mentoring: Developers' image={require('../images/code-coding-computer-34676.jpg')} />

              {/* <SectionTile link='/developers/' title='Devops'  image={require('../images/bandwidth-close-up-computer-1148820.jpg')} /> */}

              {/* <SectionTile link='/developers/' title='Designers'  image={require('../images/apple-computer-decor-326502.jpg')} /> */}

              {/* <SectionTile link='/developers/' title='UI/UX'  image={require('../images/blur-cellphone-close-up-196644.jpg')} /> */}

              <SectionTile link='/contributors/' title='Contributors'  image={require('../images/achievement-agreement-arms-1068523.jpg')} />

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
