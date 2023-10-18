import { withAuthenticationRequired } from "@auth0/auth0-react"
import PropTypes from 'prop-types'

export const AuthenticationGuard = ({ component }) => {
    const Component = withAuthenticationRequired(component, {
        onRedirecting: () => (
            <div>Redireccionando...</div>
        )
    })
    AuthenticationGuard.propTypes = {
        component: PropTypes.object
    }

    return <Component/>
}