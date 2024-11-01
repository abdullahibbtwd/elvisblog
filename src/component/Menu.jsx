import React from 'react'
import { Link } from 'react-router-dom';

const Menu = () => {
    const posts = [
        {
          id: 1,
          title: "Vegetable",
          disc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.  Natus error enim velit vel eius. Itaque velit, impedit pariatur assumenda quod deleniti eius eaque, commodi nisi blanditiis, totam asperiores nobis quidem.",
          img: "./image.jpg",
        },
        {
          id: 2,
          title: "Technology",
          disc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.  Natus error enim velit vel eius. Itaque velit, impedit pariatur assumenda quod deleniti eius eaque, commodi nisi blanditiis, totam asperiores nobis quidem.",
          img: "./images (3).jpeg",
        },
        {
          id: 3,
          title: "Sport",
          disc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.  Natus error enim velit vel eius. Itaque velit, impedit pariatur assumenda quod deleniti eius eaque, commodi nisi blanditiis, totam asperiores nobis quidem.",
          img: "./images (2).jpeg",
        },
        {
          id: 4,
          title: "Art",
          disc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.  Natus error enim velit vel eius. Itaque velit, impedit pariatur assumenda quod deleniti eius eaque, commodi nisi blanditiis, totam asperiores nobis quidem.",
          img: "./images (4).jpeg",
        },
      ];
  return (
    <div className='menu'>
      <h1>Other posts you may like</h1>
        {posts.map(post=>(
            <div className="post" key={post.id}>
                <img src={post.img} alt="" />
                <h2>{post.title}</h2>
                <Link to="/">
                 <button>Read More</button>
                </Link>
               
            </div>
        ))}
    </div>
  )
}

export default Menu
