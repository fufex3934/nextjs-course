import React from 'react'

const DashboardLayout = ({children,}:{children:React.ReactNode}) => {
  return (
    <section>
        <nav><h1>This is navbar</h1></nav>
       {children}
    </section>
  )
}

export default DashboardLayout