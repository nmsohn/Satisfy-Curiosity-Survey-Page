import Link from 'next/link';

const linkStyle = {
    marginRight: '1rem'
}
const Header = () => {
    return (
        <div>
            <Link href="/"><a style={linkStyle}>Home</a></Link>
            <Link href="/about"><a style={linkStyle}>About Us</a></Link>
            <Link prefetch href="/ssr-test"><a style={linkStyle}>SSR Test</a></Link>
        </div>
    );
};
export default Header;