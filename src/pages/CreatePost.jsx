import { useState } from "react";
import "./CreatePost.css";
import { supabase } from "../client";

const CreatePost = () => {
  const [post, setPost] = useState({ charName: "", color: "", description: "" });

  const handleChange = (event) => {
    let currPost = {...post};
    currPost["charName"] = event.target.value;
    setPost(currPost);
  };

  const handleColorChange = (event) => {
    let currPost = {...post};
    currPost["color"] = event.target.value;
    setPost(currPost);
  };

  const handleDescriptionChange = (event) => {
    let currPost = { ...post };
    currPost["description"] = event.target.value;
    setPost(currPost);
  };

  const createPost = async (event) => {
    event.preventDefault();
    await supabase
      .from("Crewmates")
      .insert({ charName: post.charName, color: post.color, description: post.description })
      .select();

    window.location = "/";
  };

  return (
    <div>
      <form>
        <label htmlFor="title">Name</label> <br />
        <input type="text" id="title" name="title" onChange={handleChange} />
        <br />
        <br />
        <label>Color</label>
        <br />
        <label>
          <input
            type="radio"
            name="color"
            value="red"
            checked={post["color"] === "red"}
            onChange={handleColorChange}
          />
          Red
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="color"
            value="yellow"
            checked={post["color"] === "yellow"}
            onChange={handleColorChange}
          />
          Yellow
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="color"
            value="blue"
            checked={post["color"] === "blue"}
            onChange={handleColorChange}
          />
          Blue
        </label>
        <br />
        <label htmlFor="description">Description</label>
        <br />
        <textarea
          rows="5"
          cols="50"
          id="description"
          name="description"
          value={post.description}
          onChange={handleDescriptionChange}
        ></textarea>
        <br />
        
        <input type="submit" value="Submit" onClick={createPost} />
      </form>
    </div>
  );
};

export default CreatePost;
