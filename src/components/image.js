import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "about.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 960) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)

    return (
        <Img
            className="contact__form__image"
            fluid={data.placeholderImage.childImageSharp.fluid}
        />
    )
}

export default Image
