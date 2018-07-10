import * as React from 'react'

import { SectionTile } from '../components/section-tile'

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
        <h1>Welcome</h1>
        <div className="secondary-text-color">
          <div>
            How often have you had this frustrating conversation with your
            pupils?
          </div>
          <br />
          <div>
            Q: "what would you like to learn about? What are your interests? How
            would you like me to help you grow?"
          </div>
          <div>A: "I dunno, I want you to help me be better at my job"</div>
          <br />
          <div>
            This certainly isn't uncommon and quite often the result is a few
            unstructured catch-ups with a some talks about a pairing session
            later on or a task to complete before the next meeting that you
            found 5 minutes beforehand in a quick google search of: 'x framework
            tutorial'. Both new and old mentors have the same issues with
            deciding on how to approach a pupils study.
          </div>
          <br />
          <div>
            To solve this we've come together to provide you and your pupil free
            programs that provide both a problem for you both to work through
            and instruction on what you as a mentor should come to expect from
            each step.
          </div>
          <br />
          <div>
            For now we only have a section for developers but if you think this
            style of course is applicable to your profession, please reach out.
          </div>
        </div>
        <br />
        <br />
        <div className="container-fluid">
          <div className="row">
            <SectionTile
              link="/developers/"
              title="Mentoring: Developers"
              image={require('../images/code-coding-computer-34676.jpg')}
            />

            {/* <SectionTile link='/developers/' title='Devops'  image={require('../images/bandwidth-close-up-computer-1148820.jpg')} /> */}

            {/* <SectionTile link='/developers/' title='Designers'  image={require('../images/apple-computer-decor-326502.jpg')} /> */}

            {/* <SectionTile link='/developers/' title='UI/UX'  image={require('../images/blur-cellphone-close-up-196644.jpg')} /> */}

            <SectionTile
              link="/contributors/"
              title="Contributors"
              image={require('../images/achievement-agreement-arms-1068523.jpg')}
            />
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
