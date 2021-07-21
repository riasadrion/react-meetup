import { Link } from 'react-router-dom'
function MainNavigation() {
    return (
        <div>
           <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link className="navbar-brand">Navbar</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
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
