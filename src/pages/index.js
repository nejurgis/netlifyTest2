import React from "react"
import { graphql } from "gatsby"

function IndexPage(props) {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.intro}</p>
      <div style={{ maxWidth: `300px` }}>
        <img src={data.image} alt="weird pic" />
      </div>
    </>
  )
}

export const query = graphql`
  query {
    allFile(
      filter: { sourceInstanceName: { eq: "content" }, name: { eq: "home" } }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              intro
              image
            }
          }
        }
      }
    }
  }
`
export default IndexPage
