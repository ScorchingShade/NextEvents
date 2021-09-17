import React, { Fragment } from 'react'
import MainHeader from './main-header'

function Layout() {
    return (
       <Fragment>
        <MainHeader/>
           <main>
               {props.children}
           </main>
       </Fragment>
    )
}

export default Layout
