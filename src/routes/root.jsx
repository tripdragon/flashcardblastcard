
import { useState } from 'react'

import { Outlet, Link, useParams } from "react-router-dom";

import {frontPagePosts} from '@databases/frontpage';

import '@styles/frontpageList.scss';

import '@styles/sitetitle.scss';



export default function Root() {
  
  const params = useParams();
  console.log(params);
  
  return (
    <>
      <header id="header">
        <Link to={`/`}><h1>FlashCards <br/>BlastCards!</h1></Link>
      {/*
        <h1><Link to={`/`}>FlashCards, BlastCards!</Link></h1>
        */}  
      </header>
      
      {/*
      <nav>
        <ul>
          {
            frontPagePosts.map((x,ii)=>{
              return (
                <li key={ii}>
                  <Link to={x.link}>{x.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
      */}
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
    
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
