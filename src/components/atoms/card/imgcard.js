/* eslint-disable */
import React from "react"
import { navigate } from "gatsby"

export default function Imgcard({ postdata }) {
    return (
        <div
            key={postdata.node.id}
            className="card"
            data-sal="fade"
            data-sal-delay="50"
            data-sal-easing="ease-in-out"
            style={{
                backgroundImage: `linear-gradient(
                        to bottom,
                        rgba(10, 10, 10, 0) 0%,
                        rgba(10, 10, 10, 0.36) 50%,
                        rgba(10, 10, 10, 0.6) 100%),
                        url(${postdata.node.featuredImage.fluid.src})`,
            }}
            onClick={() => navigate(`/blog/${postdata.node.slug}/`)}
        >
            {postdata.node.category.map((category) => (
                <p
                    className="card__category"
                    key={category.title}
                    data-sal="fade"
                    data-sal-delay="100"
                    data-sal-easing="ease-in-out"
                >
                    {category.title}
                </p>
            ))}
            <p
                className="card__title"
                data-sal="fade"
                data-sal-delay="150"
                data-sal-easing="ease-in-out"
            >
                {postdata.node.title}
            </p>
        </div>
    )
}
