import * as React from "react"
import { Link } from "gatsby"


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <p class="font-semibold text-2xl bg-gray-500 w-2/3 justify-center mx-auto">
        <Link to="/">{title}</Link>
      </p>
    )
  } else {
    header = (
      <Link class="font-semibold text-2xl bg-gray-500 w-2/3 justify-center mx-auto" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div class="text-lg" data-is-root-path={isRootPath}>
      <header>{header}</header>

      <main>{children}</main>
      
      <footer class="mt-2 pl-2 flex flex-row bg-gray-300 justify-between">
        <div>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com" target="_blank" rel="noopener noreferrer" class="text-red-500 hover:bg-red-500 hover:text-white">Gatsby&nbsp;</a>
          <span>and <a href="https://www.tailwindcss.com" target="_blank" rel="noopener noreferrer" class="text-red-500 hover:bg-red-500 hover:text-white">TailwindCSS</a></span>
        </div>
        <p class="mr-2">&nbsp;Another <a href="https://mountaintopcoding.com" target="_blank" rel="noopener noreferrer" class="text-red-500 hover:bg-red-500 hover:text-white">mountainTopCoding(<span role="img" aria-label="mountain with snow-cap">&#127956;</span>);</a> project.</p>
      </footer>
    </div>
  )
}

export default Layout
