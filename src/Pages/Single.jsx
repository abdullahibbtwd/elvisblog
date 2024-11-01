
import { RiDeleteBin2Fill } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import Menu from "../component/Menu";

const Single = () => {
  return (
    <div className="single-page">
      <div className="content">
        <img src="./image.jpg" alt="" />
        <div className="user">
          <img src="./images (2).jpeg" alt="" />
          <div className="info">
            <span>Abdul</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link className="link" to={`/write?edit=2`}>
              <CiEdit />
            </Link>
            <RiDeleteBin2Fill />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum unde
          similique eligendi dolor culpa id, 
        </h1>
        <p>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis illo
          commodi molestiae nulla sint dolor cumque laborum inventore numquam.
          Eos sunt hic nesciunt temporibus veritatis vitae vero rerum,
          recusandae et?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis illo
          commodi molestiae nulla sint dolor cumque laborum inventore numquam.
          Eos sunt hic nesciunt temporibus veritatis vitae vero rerum,
          recusandae et? <br/>
          <br />
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis illo
          commodi molestiae nulla sint dolor cumque laborum inventore numquam.
          Eos sunt hic nesciunt temporibus veritatis vitae vero rerum,
          recusandae et?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis illo
          commodi molestiae nulla sint dolor cumque laborum inventore numquam.
          Eos sunt hic nesciunt temporibus veritatis vitae vero rerum,
          recusandae et?</p>
         
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis illo
          commodi molestiae nulla sint dolor cumque laborum inventore numquam.
          Eos sunt hic nesciunt temporibus veritatis vitae vero rerum,
          recusandae et?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis illo
          commodi molestiae nulla sint dolor cumque laborum inventore numquam.
          Eos sunt hic nesciunt temporibus veritatis vitae vero rerum,
          recusandae et? <br/>
          <br />
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis illo
          commodi molestiae nulla sint dolor cumque laborum inventore numquam.
          Eos sunt hic nesciunt temporibus veritatis vitae vero rerum,
          recusandae et?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis illo
          commodi molestiae nulla sint dolor cumque laborum inventore numquam.
          Eos sunt hic nesciunt temporibus veritatis vitae vero rerum,
          recusandae et?</p>
          
          <br />
          <p>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis illo
          commodi molestiae nulla sint dolor cumque laborum inventore numquam.
          Eos sunt hic nesciunt temporibus veritatis vitae vero rerum,
          recusandae et?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis illo
          commodi molestiae nulla sint dolor cumque laborum inventore numquam.
          Eos sunt hic nesciunt temporibus veritatis vitae vero rerum,
          recusandae et?  <br/>
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis illo
          commodi molestiae nulla sint dolor cumque laborum inventore numquam.
          Eos sunt hic nesciunt temporibus veritatis vitae vero rerum,
          recusandae et?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis illo
          commodi molestiae nulla sint dolor cumque laborum inventore numquam.
          Eos sunt hic nesciunt temporibus veritatis vitae vero rerum,
          recusandae et?</p>
      
         

        </p>
      </div>
      <div className="menu">
        <Menu/>
      </div>
    </div>
  );
};

export default Single;
