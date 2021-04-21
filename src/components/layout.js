import * as React from "react"
import { Link } from "gatsby"

import IdentityModal, { useIdentityContext } from "react-netlify-identity-widget"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  const name =
    (identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.name) || "NoName"
  const isLoggedIn = identity && identity.isLoggedIn

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div class="text-lg" data-is-root-path={isRootPath}>
      <header class="font-semibold text-2xl bg-gray-500 pl-2">{header}</header>
        <nav class="text-red-500">
          {" "}
          Login Status:
          <button className="btn" onClick={() => setDialog(true)}>
            {isLoggedIn ? `Hello ${name}, Log out here!` : "LOG IN"}
          </button>
        </nav>

      <main>{children}</main>
      
      <IdentityModal showDialog={dialog} onCloseDialog={() => setDialog(false)} />
      
      <footer class="mt-2 pl-2 flex flex-row bg-gray-300">
        © {new Date().getFullYear()}, Built with&nbsp;
        {` `}
        <a href="https://www.gatsbyjs.com" target="_blank" rel="noopener noreferrer" class="text-red-500 hover:bg-red-500 hover:text-white">Gatsby&nbsp;</a>
        <p>and <a href="https://www.tailwindcss.com" target="_blank" rel="noopener noreferrer" class="text-red-500 hover:bg-red-500 hover:text-white">TailwindCSS</a></p>
        <p>&nbsp;Another <a href="https://mountaintopcoding.com" target="_blank" rel="noopener noreferrer" class="text-red-500 hover:bg-red-500 hover:text-white">mountainTopCoding(<span role="img" aria-label="mountain with snow-cap">&#127956;</span>);</a> project.</p>
      </footer>
    </div>
  )
}

export default Layout
