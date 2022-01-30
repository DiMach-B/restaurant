import { Route, Switch, Redirect } from 'react-router-dom'
import { authRouters } from '../route'
import { REGISTRATION_ROUTE } from '../utils/const'

const AppRouter = () => {
    return (
        <Switch>
            {authRouters.map(({ path, Component }) =>
                <Route exact key={path} path={path} component={Component} />
            )}
            <Redirect to={REGISTRATION_ROUTE} />
        </Switch>
    )
}

export default AppRouter;