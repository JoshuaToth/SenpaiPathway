import * as React from 'react'

class Disqus extends React.Component<null, null> {
  disqus_config = function () {
      if (typeof document !== "undefined") {
        let d = document, s = d.createElement('script');
        s.src = 'https://senpaipathway.disqus.com/embed.js';
        s.setAttribute('data-timestamp', new Date().toUTCString());
        (d.head || d.body).appendChild(s);
      }

  };

  render() {
      this.disqus_config();
      return (
          <div className='disqus'>
            <div id='disqus_thread'></div>
            <noscript>Please enable JavaScript to view the <a href='https://disqus.com/?ref_noscript'>comments powered by Disqus.</a></noscript>                
          </div>
      );
  }
};

export default function Template({ data }: { data: any }) {
  const { markdownRemark } = data
  if (!markdownRemark) {
    console.log(data)
    return <div className="template" /> // For whatever reason gatsbyJS will load THIS file as a template too. zzz
  }

  const { frontmatter, html } = markdownRemark
  return (
    <div className="lesson-post-container">
      <div className="lesson-post">
        <h1 className="primary-text-color">{frontmatter.title}</h1>
        <div
          className="lesson-post-content primary-text-color"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <Disqus />
    </div>
  )
}

export const pageQuery = graphql`
  query LessonPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
