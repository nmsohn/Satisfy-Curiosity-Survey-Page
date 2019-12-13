import Link from 'next/link';

const linkStyle = {
    marginRight: '1rem'
}
const NavBar = () => {
    return (
        <div className="header">
            <Link href="/"><a style={linkStyle}>Home</a></Link>
            <Link href="/about"><a style={linkStyle}>About Us</a></Link>
            <Link prefetch href="/ssr-test"><a style={linkStyle}>SSR Test</a></Link>
        </div>
    );
};
export default NavBar;