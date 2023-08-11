"use client"
import React from 'react'

const Ajmat = ({params}) => {
  console.log(params)
  return (
    <>
    <div>{params.Blogpost}</div>
    <h1>Dynamic routing - this is page {params.blogpost}</h1>
    </>
  )
}

export default Ajmat