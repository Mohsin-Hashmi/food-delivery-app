import PropTypes from 'prop-types'
import Navbar from './Navbar'
import Banner from './Banner'
const Layout = ({children}) => {
  return (
    <div className='home'>
        <Navbar/>
        <Banner/>
        <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired, // Ensures children is a valid React node and required
};

export default Layout;