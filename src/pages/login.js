import * as React from "react"

import Bio from "../components/bio"
import Seo from "../components/seo"
import Header from "../components/header"

import IdentityModal, { useIdentityContext } from "react-netlify-identity-widget"

const Login = () => {

    const identity = useIdentityContext()
    const [dialog, setDialog] = React.useState(false)
    const name = (identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.name) || "NoName"
    const isLoggedIn = identity && identity.isLoggedIn

    return (
        <div class="text-lg">
            <Seo />
            <Header />
            <nav class="text-red-500">
                {" "}
                Login Status:
                <button className="btn" onClick={() => setDialog(true)}>
                    {isLoggedIn ? `Hello ${name}, Log out here!` : "LOG IN"}
                </button>
            </nav>
            <IdentityModal showDialog={dialog} onCloseDialog={() => setDialog(false)} />
            <Bio />
        </div>
    )
}

export default Login