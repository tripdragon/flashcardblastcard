
import React from 'react'
import ReactDOM from 'react-dom/client'


import { Link } from "react-router-dom";

import {frontPagePosts} from '@databases/frontpage';

import '@styles/frontpageList.scss';

function Posts() {
  // debugger
  return (
    <>
    <section id="posts" >
      {
        frontPagePosts.map((x,ii)=>{
          return (
            <Link key={ii} to={x.link}>
              <article key={ii}>
              <h3>{x.title}</h3>
              <h4>Lesson: {x.subtitle}</h4>
              </article>
            </Link>
          )
        })
      }
    </section>
    </>
  )
}

export default Posts;
