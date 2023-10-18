import { Link } from "react-router-dom"
import LoginButton from "./LoginButton"
import RegisterButton from "./RegisterButton"
import LogoutButton from "./LogoutButton"
import { useAuth0 } from "@auth0/auth0-react"

const Header = () => {
    const { isAuthenticated } = useAuth0();
    return (
        <div>
            <nav>
                <Link to="/">
                    Home
                </Link>
                <Link to="/events">
                    Events
                </Link>
                {isAuthenticated ? (<LogoutButton />)
                    :
                    (
                        <>
                            <LoginButton />
                            <RegisterButton />
                        </>
                    )
                }
            </nav>
        </div>
    )
}

export default Header