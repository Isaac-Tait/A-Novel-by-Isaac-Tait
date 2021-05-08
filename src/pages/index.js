import * as React from "react"
import { Link, graphql } from "gatsby"
import netlifyIdentity from "netlify-identity-widget"

import Birds from "../images/bare-tree.svg"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

window.netlifyIdentity = netlifyIdentity;

netlifyIdentity.init({});

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <img src={Birds} alt="birds icon" class="ml-6"/>
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <img src={Birds} alt="birds icon" class="ml-6"/>

      <ol>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          return (
            <li key={post.fields.slug}>
              <article
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <p class="text-2xl text-red-300 ml-2">
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </p>
                  <p class="text-sm text-gray-400 ml-6">{post.frontmatter.date}</p>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                    class="italic text-base ml-6"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
      
      <div>
        <div data-netlify-identity-menu></div>
        <div data-netlify-identity-button>Login/Register</div>
      </div>

      <hr />

      <div class="mt-2 ml-2">
        <Bio />
      </div>

    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
