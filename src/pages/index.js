import React from "react"

import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"

import Articles from "../components/Articles"

import "../assets/css/main.css"

const IndexPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        query {
          allStrapiArticle {
            edges {
              node {
                strapiId
                title
                category {
                  name
                }
                image {
                  publicURL
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div className="uk-section">
          <div className="uk-container uk-container-large">
            <h1>Roshani LiTiL</h1>
            <Articles articles={data.allStrapiArticle.edges} />
          </div>
        </div>
      )}
    />
  </Layout>
)

export default IndexPage
