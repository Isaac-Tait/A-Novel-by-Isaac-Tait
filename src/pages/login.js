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
                <button class="bg-gray-500" onClick={() => setDialog(true)}>
                    {isLoggedIn ? `Hello ${name}, Log out here!` : "LOG IN"}
                </button>
            </nav>

            <div class="bg-gray-800">
                <IdentityModal showDialog={dialog} onCloseDialog={() => setDialog(false)} />
            </div>
            
            <Bio />
        </div>
    )
}

export default Login