import React from 'react';

function Navbar() {
    const user = JSON.parse(localStorage.getItem('currentUser'));

    function logout() {
        localStorage.removeItem('currentUser');
        window.location.href = '/login';
    }

    return (
        <div>
            <nav style={{width:"100%"}} className="navbar navbar-expand-lg navbar-light bg-black">
                <div className="container-fluid">
                    <img
                        src="https://thumbs.dreamstime.com/b/sr-letter-logo-heraldic-shield-shape-crown-vintage-black-background-template-design-343453572.jpg"
                        alt="Logo"
                        width="85"
                        height="70"
                    />
                    <a style={{fontFamily:'sans-serif'}} className="navbar-brand fs-2 " href="/">  <b>SHEY ROOMS</b> </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon">
                            <i className="fa fa-bars" style={{ color: "white" }}></i>
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            {user ? (
                                <>
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-secondary dropdown-toggle"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <i className="fa fa-user"></i> {user.name}
                                        </button>
                                        <div className="dropdown-menu bg-white text-black">
                                            <a className="dropdown-item text-black" href="/profile">Profile</a>
                                            <button
                                                className="dropdown-item text-black"
                                                onClick={logout}
                                            >
                                                Logout
                                            </button>
                                        </div>

                                    </div>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/register">
                                            Register
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/login">
                                            Login
                                        </a>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
