import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import "./featured.css"

export default () => (
    <StaticQuery
        query={graphql`
            query FeaturedQuery {
                allContentfulBlog(
                    limit: 1
                    sort: { fields: [createdAt], order: DESC }
                    filter: {
                        node_locale: { eq: "en-US" }
                        featured: { eq: true }
                    }
                ) {
                    edges {
                        node {
                            id
                            slug
                            title
                            authorData {
                                authorName
                                authorSlug
                            }
                            category {
                                title
                                id
                            }
                            readDuration
                            createdAt(formatString: "MMMM DD, YYYY")
                            shortDescription
                            featuredImage {
                                fluid(
                                    maxWidth: 1200
                                    quality: 70
                                    toFormat: WEBP
                                ) {
                                    src
                                    ...GatsbyContentfulFluid
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={(data) => (
            <header>
                {data.allContentfulBlog.edges.map((edge) => (
                    <div key={edge.node.id} className="header__section">
                        <div
                            className="header__hero"
                            style={{
                                backgroundImage: `url(${edge.node.featuredImage.fluid.src})`,
                            }}
                        ></div>
                        <div className="header__content">
                            <div className="header__info">
                                <h2
                                    className="banner___title"
                                    data-sal="fade"
                                    data-sal-delay="100"
                                    data-sal-easing="ease-in-out"
                                >
                                    {edge.node.title}
                                </h2>
                                <p
                                    className="header__subtitle"
                                    data-sal="fade"
                                    data-sal-delay="150"
                                    data-sal-easing="ease-in-out"
                                >
                                    {edge.node.shortDescription}
                                </p>
                                <p
                                    className="header__author"
                                    data-sal="fade"
                                    data-sal-delay="200"
                                    data-sal-easing="ease-in-out"
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                    }}
                                >
                                    <Link
                                        style={{
                                            textDecoration: "none",
                                            color: "white",
                                            cursor: "pointer",
                                        }}
                                        to={`/idiots/${edge.node.authorData.authorSlug}/`}
                                    >
                                        {"By"}
                                        <strong>
                                            {" "}
                                            {
                                                edge.node.authorData.authorName
                                            }{" "}
                                        </strong>
                                        {"On "}
                                        {edge.node.createdAt}
                                    </Link>
                                </p>
                                <div
                                    className="header__button__div"
                                    data-sal="fade"
                                    data-sal-delay="400"
                                    data-sal-easing="ease-in-out"
                                >
                                    <Link to={`/blog/${edge.node.slug}/`}>
                                        <button
                                            style={{
                                                marginTop: "5px",
                                                outline: "none",
                                            }}
                                            className="btn__med"
                                        >
                                            Read Post
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </header>
        )}
    />
)
