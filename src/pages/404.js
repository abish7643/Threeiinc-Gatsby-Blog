import React from "react"
import Layout from "../components/layout"
import NavBlackText from "../components/navBlackText"
import SEO from "../components/seo"
import { navigate } from "gatsby"
const NotFoundPage = () => (
    <Layout>
        <SEO 
            title="404: Not found" 
            keywords="3iinc, idiots, 3i, INC, 3 Idiots Incorporation, 3 Idiots Incorporated, 3 Idiots, Blog, Articles, Rogue, Idiot, Choice"
            image='https://images.ctfassets.net/2g0bd82kkvps/6YYHEOQ1diL651fE06jWpy/30e2abe4ffe942d9538912f5a6fb4b03/threeiinc-icon.png'
        />
        <NavBlackText />
        <div
            style={{
                textAlign: "center",
                height: "100px",
                padding: "24px 0",
                margin: "0px 16px",
            }}
        >
            <h1 style={{ fontFamily: "Montserrat", fontSize: "48px" }}>
                NOT FOUND
            </h1>
            <p
                style={{
                    fontFamily: "Montserrat",
                    margin: "40px 0px",
                    marginTop: "24px",
                }}
            >
                You just hit a route that doesn&#39;t exist...the sadness.
            </p>
            <div
                data-sal="slide-up"
                data-sal-delay="400"
                data-sal-easing="ease"
            >
                <button
                    onClick={() => navigate(`/`)}
                    style={{
                        maxWidth: "160px",
                    }}
                    className="btn__med"
                >
                    Go Home
                </button>
            </div>
        </div>
    </Layout>
)

export default NotFoundPage
