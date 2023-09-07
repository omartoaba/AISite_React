import React from 'react'
import Article from '../../components/article/Article'
import './blog.css'
import { blog01,blog02,blog03,blog04,blog05 } from './imports'
function Blog() {
  return (
     <div className='ai__blog section__padding' id='blog'>
        <div className="ai__blog-heading">
          <h1 className="gradient__text">
            A lot is happening, We are blogging about it
          </h1>
        </div>
        <div className="ai__blog-container">
          <div className="ai__blog-container-groupeA">
            <Article imgUrl={blog01} date ="Sep 2,2023" title="let us explore what's AI"/>
          </div>
          <div className="ai__blog-container_groupeB">
            <Article imgUrl={blog02} date ="Sep 2,2023" title="let us explore what's AI"/>
            <Article imgUrl={blog03} date ="Sep 2,2023" title="let us explore what's AI"/>
            <Article imgUrl={blog04} date ="Sep 2,2023" title="let us explore what's AI"/>
            <Article imgUrl={blog05} date ="Sep 2,2023" title="let us explore what's AI"/>
          </div>
        </div>
     </div>
  )
}

export default Blog