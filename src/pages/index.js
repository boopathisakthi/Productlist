import React from "react"


import Layout from "../components/layout"

import SEO from "../components/seo"
import { graphql, StaticQuery } from "gatsby"
import Post from "../components/post"
import {
  CardColumns

} from 'reactstrap';
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
   
    <CardColumns>
      <StaticQuery query={indexQuery} render={data => {
        return (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post productname={node.frontmatter.productname} path={node.frontmatter.path}
                price={node.frontmatter.price}
                fluid={node.frontmatter.image.childImageSharp.fluid}
              />
            ))}
          </div>
        )
      }} >

      </StaticQuery>
      </CardColumns>

   


  </Layout>
)

const indexQuery = graphql`
  query{
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            productname
            price
            path
            image{
              childImageSharp{
                 fluid(maxWidth:600){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }

`

export default IndexPage
