import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./EditPost.css";
import { supabase } from "../client";

const EditPost = ({ data }) => {
  const { id } = useParams();

  const [post, setPost] = useState({
    charName: "",
    color: "",
    description: "",
  });

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase
        .from("Crewmates")
        .select()
        .eq("id", id)
        .single();
      setPost({
        charName: data.charName,
        color: data.color,
        description: data.description,
      });
    };
    fetchPosts();
  }, [id]);

  const handleChange = (event) => {
    let currPost = { ...post };
    currPost["charName"] = event.target.value;
    setPost(currPost);
  };

  const handleColorChange = (event) => {
    let currPost = { ...post };
    currPost["color"] = event.target.value;
    setPost(currPost);
  };

  const handleDescriptionChange = (event) => {
    let currPost = { ...post };
    currPost["description"] = event.target.value;
    setPost(currPost);
  };

  const updatePost = async (event) => {
    event.preventDefault();
    await supabase
      .from("Crewmates")
      .update({ charName: post.charName, color: post.color, description: post.description })
      .eq("id", id);

    window.location = "/";
  };

  const deletePost = async (event) => {
    event.preventDefault();
    await supabase.from("Crewmates").delete().eq("id", id);

    window.location = "/";
  };

  return (
    <div>
      <form>
        <label htmlFor="title">Name</label> <br />
        <input
          type="text"
          id="title"
          name="title"
          value={post.charName}
          onChange={handleChange}
        />
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
        <input type="submit" value="Submit" onClick={updatePost} />
        <button className="deleteButton" onClick={deletePost}>
          Delete
        </button>
      </form>
    </div>
  );
};

export default EditPost;
