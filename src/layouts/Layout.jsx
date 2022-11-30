import Footer from '../components/Footer'

const Layout = ({ children }) => {
    return (
        <>
            <header>header</header>
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout
