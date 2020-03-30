import { Link } from "gatsby"
import React from "react"
/*import { window } from 'browser-monads';
 */
import "./navBlackText.css"

const NavBlackText = () => (
    <div className="nav__container__black">
        <div className="nav__inner__black">
            <div className="nav__logo__div__black">
                <h1>
                    <Link
                        to="/"
                        className="nav__logo__black"
                        style={{ textDecoration: "None" }}
                    >
                        3i INC
                    </Link>
                </h1>
            </div>

            <div className="nav__component__black">
                <div className="nav__component__div__black">
                    <Link
                        to="/about/"
                        className="nav__component__link__black"
                        style={{ textDecoration: "None" }}
                    >
                        About
                    </Link>
                </div>
                <div className="nav__component__div__black">
                    <Link
                        to="/contact/"
                        className="nav__component__link__black"
                        style={{ textDecoration: "None" }}
                    >
                        Contact
                    </Link>
                </div>
                <div className="nav__component__div__black">
                    <Link
                        to="/idiots/"
                        className="nav__component__link__black"
                        style={{ textDecoration: "None" }}
                    >
                        Contribute
                    </Link>
                </div>
            </div>
        </div>
    </div>
)

export default NavBlackText
