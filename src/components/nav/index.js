import { Link } from "gatsby"
import React from "react"
/*import { window } from 'browser-monads';
 */
import "./nav.css"

const Nav = () => (
    <div className="nav__container">
        <div className="nav__inner">
            <div className="nav__logo__div">
                <h1>
                    <Link
                        to="/"
                        className="nav__logo"
                        style={{ textDecoration: "None" }}
                    >
                        3i INC
                    </Link>
                </h1>
            </div>

            <div className="nav__component">
                <div className="nav__component__div">
                    <Link
                        to="/about/"
                        className="nav__component__link"
                        style={{
                            textDecoration: "None",
                            marginLeft: "0px",
                            letterSpacing: "0.5px",
                        }}
                    >
                        About
                    </Link>
                </div>
                <div className="nav__component__div">
                    <Link
                        to="/idiots/"
                        className="nav__component__link"
                        style={{ textDecoration: "None" }}
                    >
                        Contribute
                    </Link>
                </div>
                <div className="nav__component__div">
                    <Link
                        to="/contact/"
                        className="nav__component__link"
                        style={{
                            textDecoration: "None",
                            marginRight: "0px",
                            letterSpacing: "-0.5px",
                        }}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    </div>
)

export default Nav
