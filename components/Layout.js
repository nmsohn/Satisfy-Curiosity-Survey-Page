import Header from './Header';
import styled from 'styled-components';

const Layout = ({children}) => (
    <div>
        <Header/>
        {children}
    </div>
);

export default Layout;