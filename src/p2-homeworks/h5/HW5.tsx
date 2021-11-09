import React from 'react'
import Header from './Header'
import Routes from './Routes'
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            {/*<HashRouter>*/}

            <HashRouter>

                <Header/>

                <Routes/>

            </HashRouter>

            {/*</HashRouter>*/}
        </div>
    )
}

export default HW5
