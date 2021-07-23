import React from 'react'
import MainNavigation from './MainNavigation'

function MainLayout(props) {
    return (
        <div>
            <MainNavigation />
            <main>{props.children}</main>
        </div>
    )
}

export default MainLayout
