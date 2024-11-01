
import { Link } from "react-router-dom";

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
const Home = () => {
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to="single">
            
              <h1>{post.title}</h1>
         
                
              </Link>
              <p>{post.disc}</p>
              <Link to="single">
               <button >Read More</button>
              </Link>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
