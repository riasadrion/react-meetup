import { Link } from 'react-router-dom'
function MainNavigation() {
    return (
        <div>
           <nav className="navbar navbar-expand-md navbar-light" style={{backgroundColor: "#61dafb"}}>
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">React Meetups</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-link">All</Link>
                        <Link to="/new-meetup" className="nav-link">New</Link>
                        <Link to="/favorites" className="nav-link">Favorites</Link>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default MainNavigation
