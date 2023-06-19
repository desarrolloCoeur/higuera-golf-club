import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header'
import React from 'react'

const layout = ({children}) => {
  return (
    <>
        <Header />
            {children}
        <Footer />
    </>
  )
}

export default layout