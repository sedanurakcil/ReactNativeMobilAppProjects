import React from 'react'
import Router from './Router'
import AuthProvider from './context/AuthProvider'

// Artık routerı bu yapıyla sardığım için index .js e bu dosya gitmeli

const Wrapper =()=>{
    return(
        <AuthProvider>
        <Router/>
        </AuthProvider>
    )
}

export default Wrapper