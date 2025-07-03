import React from 'react'
import Header from './Header'
import Footer from './Footer'
import LiveChatButton from '../LiveChatButton'

const Layout = ({children}) => {
  return (
    <>
        <Header />
        {children}
        <LiveChatButton />
        <Footer />
    </>
  )
}

export default Layout