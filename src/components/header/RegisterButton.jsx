import { useAuth0 } from "@auth0/auth0-react"

const RegisterButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <button
            onClick={() => loginWithRedirect({
                appState: {
                    returnTo: window.location.pathname
                },
                authorizationParams: {
                    screen_hint: "signup"
                }
            })}>
                Register</button>
    )
}

export default RegisterButton