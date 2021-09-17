import React, { Fragment } from 'react'

function Layout() {
    return (
       <Fragment>
           <header>

           </header>
           <main>
               {props.children}
           </main>
       </Fragment>
    )
}

export default Layout
