import Header from './Header';
import styled from 'styled-components';
import NavBar from './NavBar';

const Layout = props => (
    <div className="layout">
        <Header/>
        <NavBar/>
        <div className="content">
            {props.children}
        </div>
    </div>
);

export default Layout;