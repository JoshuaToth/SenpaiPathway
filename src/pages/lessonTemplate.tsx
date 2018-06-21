import * as React from 'react'

export default function Template({
  data} : {data:any} // this prop will be injected by the GraphQL query below.
) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="lesson-post-container">
      <div className="lesson-post">
        <h1 className="primary-text-color" >{frontmatter.title}</h1>
        <div
          className="lesson-post-content primary-text-color"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
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
`;