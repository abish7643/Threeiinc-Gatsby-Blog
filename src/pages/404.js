import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { navigate } from "gatsby"
const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <div
            style={{
                textAlign: "center",
                width: "100%",
                height: "100px",
                padding: "35% 0",
                marginLeft: "-8px",
                marginTop: "-30px",
            }}
        >
            <h2
                onClick={() => navigate(`/`)}
                style={{
                    cursor: "pointer",
                    color: "black",
                    fontSize: "45px",
                    lineHeight: "80px",
                    fontWeight: "900",
                }}
            >
                3I INC
            </h2>
            <h1 style={{ fontFamily: "montserrat"}}>NOT FOUND</h1>
            <p
                style={{
                    fontFamily: "poppins",
                    padding: "0px 10px",
                    margin: "30px 10px",
                }}
            >
                You just hit a route that doesn&#39;t exist...the sadness.
            </p>
            <button onClick={() => navigate(`/`)} className="btn__med">
                Go Home
            </button>
        </div>
    </Layout>
)

export default NotFoundPage
