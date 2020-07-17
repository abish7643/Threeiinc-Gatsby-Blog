import React from "react"
import Img from "gatsby-image"
import { navigate } from "gatsby"

export default function Searchcard({ postdata }) {
    return (
        <div
            key={postdata.node.id}
            className="search__entries"
            onClick={() => navigate(`/blog/${postdata.node.slug}/`)}
        >
            <Img
                className="search__entries__img"
                sizes={postdata.node.featuredImage.fluid}
            />
            <div className="search__entries__details">
                {postdata.node.category.map((category) => (
                    <span
                        className="search__entries__details__category"
                        key={category.id}
                    >
                        {category.title}
                    </span>
                ))}
                <p className="search__entries__details__title">
                    {postdata.node.title}
                </p>
                <p className="search__entries__details__author">
                    <span className="text-left">
                        <span className="text-opacity-low">By</span>{" "}
                        {postdata.node.authorData.authorName}
                    </span>
                    <span className="text-opacity-low">
                        on {postdata.node.createdAt}
                    </span>
                </p>
            </div>
        </div>
    )
}
