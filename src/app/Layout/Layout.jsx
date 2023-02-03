import { Footer, Header } from 'widgets'

function Layout({ children }) {
     return (
          <>
               <Header />
               <div>{children}</div>
               <Footer />
          </>
     )
}

export default Layout
