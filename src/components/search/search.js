import React from 'react'
import {navigate} from 'gatsby'
import moment from 'moment'
import Img from 'gatsby-image'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, connectHits, Pagination } from 'react-instantsearch-dom'

import "./search.css"

const searchClient = algoliasearch(
  "XAXE9VEPK1",
  "689da4f53053898c055506301a75efb1",
  "posts"
)

const PostHits = connectHits(({ hits }) => (
    <>
      {hits.length ? (
        <div className="search__inner">
          {hits.map(hit => {
            return (
                  <div
                    key={hit.objectID}
                    className="search__entries"
                    onClick={() => navigate(`/blog/${hit.slug}/`)}
                    >
                    <Img className="search__entries__img" sizes={hit.featuredImage.fluid}/>
                    <div className="search__entries__details">
                    {hit.category.map(category => (
                        <span
                            className="search__entries__details__category"
                            key={category.id}
                        >
                            {category.title}
                        </span>
                    ))}
                    <p className="search__entries__details__title">
                        {hit.title}
                    </p>
                    <p className="search__entries__details__author">
                        <span className="text-left"><span className="text-opacity-low">By</span> {hit.authorData.authorName} </span>  
                        <span className="text-opacity-low">on {moment(hit.createdAt).format('MMM Do YYYY')}</span>
                    </p>
                </div>
            </div>
            )
          })}
        </div>
      ) : (
        <div className="search__entries__none">
            Oh Snap!<br/>
            That's Worse Than a 404!
        </div>
      )}
    </>
  ))

export default function Search() {
  return (
      <div className="search__page__container">
        <InstantSearch
        indexName={process.env.ALGOLIA_INDEX_NAME}
        searchClient={searchClient}
        >
        <SearchBox translations={{placeholder: 'Search 3i'}}/>
        <PostHits/>
        <Pagination/>
        </InstantSearch>
    </div>
  )
}