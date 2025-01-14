import React from 'react'

function Navbar() {

    const user = JSON.parse(localStorage.getItem('currentUser'));
    function logout(){
        localStorage.removeItem('currentUser')
            window.location.href='/login'
    }
    return (
        <div >
            <nav class="navbar navbar-expand-lg  ">
                <div class="container-fluid">
                    
                    <img src ="https://thumbs.dreamstime.com/b/sr-letter-logo-heraldic-shield-shape-crown-vintage-black-background-template-design-343453572.jpg" alt="Logo" width="85" height="70" 
                    />
                    <a class="navbar-brand" href="/"> SHEY ROOMS</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon" ><i class="fa fa-bars" style={{color:"white"}}></i></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul  class="navbar-nav mr-5">
                            {user ? (
                                <>
                                    <div class="dropdown" >
                                        <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                      <i class="fa fa-user"></i>  {user.name}
                                        </button>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="/profile">Profile</a>
                                            <a class="dropdown-item" href="#" onClick={logout}>Logout</a>
                                            
                                        </div>
                                    </div>
                                </>) : (<>
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="/register">Register</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="/login">Login </a>
                                    </li>
                                </>)}

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar