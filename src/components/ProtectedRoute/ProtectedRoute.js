import React from 'react'
import { Redirect, Route } from 'react-router-dom'

function ProtectedRoute({path, component: Component}) {
    
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    
    return (
        <Route
            path = {path}
            render={() => {
                if (isAuthenticated) {
                    return <Component />
                } else {
                    return <Redirect to="/sign-up" />
                }
            }}>
        </Route>
    )
}

export default ProtectedRoute
