import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div class="flex flex-row">
      <StaticImage
        class="rounded-md mr-2"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/profile-pic.jpg"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <div class="inline-block">
          Written by <span class="font-semibold">{author.name}</span> {author?.summary || null}
          {` `}
          <div>
            <span>You should follow him on </span>
            <a href={`https://twitter.com/${social?.twitter || ``}`} target="_blank" rel="noopener noreferrer" class="text-red-500 hover:bg-red-500 hover:text-white">
              Twitter
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default Bio
