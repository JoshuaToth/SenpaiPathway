import * as React from 'react'
import { Contributor } from '../components/contributor';

interface ContributorsPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}


export default class extends React.Component<ContributorsPageProps, {}> {
  constructor(props: ContributorsPageProps, context: any) {
    super(props, context)
  }
  public render() {
    return (
      <div>
        <h1>Contributors</h1>
        <div className='container'>
            <div className='row'>
                <Contributor name='Susan Brander' userId='4423060' twitter="SusanBrander" github="snoozins" />
                <Contributor name='Joshua Toth' userId='10456811' twitter="tothjoshuaj" github="JoshuaToth"/>
            </div>
        </div>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query ContributorsQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
