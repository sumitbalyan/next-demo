import Link from 'next/link'

const NavBar=()=>(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
<div className="container">
    <a className="navbar-brand" href="#">TrexBiz</a>
    <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item active"></li>
            <li><Link href="/"><a className="nav-link">Home <span className="sr-only">(current)</span></a></Link></li>
            <li className="nav-item">
            <Link href="/about"><a className="nav-link">About <span className="sr-only">(current)</span></a></Link></li>
        </ul>
    </div>
    </div>
</nav>
)

export default NavBar;