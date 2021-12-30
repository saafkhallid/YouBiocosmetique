import React from 'react'

const Layout = ({ className, children }) => {
    return (
        <div>
         
            <div className={className}>
                {children}
            </div>



        </div>
    )
}

export default Layout



    
