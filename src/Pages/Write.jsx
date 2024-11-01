import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h2>Publish</h2>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{ display: "none" }} type="file" name="" id="file" />
          <label className="file" htmlFor="file">
            Upload image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name="cat" id="art" value="art" />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
          
            <input type="radio" name="cat" id="Science" value="Science" />
            <label htmlFor="Science">Science</label>
          </div>
          <div className="cat">
        
            <input type="radio" name="cat" id="Technology" value="Technology" />
            <label htmlFor="Technology">Technology</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" id="Cinema" value="Cinema" />
            <label htmlFor="Cinema">Cinema</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" id="Design" value="Design" />
            <label htmlFor="Design">Design</label>
          </div>
          <div className="cat">
            
            <input type="radio" name="cat" id="Food" value="Food" />
            <label htmlFor="Food">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
