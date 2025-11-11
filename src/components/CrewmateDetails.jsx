import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { supabase } from "../client";

function CrewmateDetails() {
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

  return (
    <div>
      <h2>Crewmate Details</h2>
      {/* Render crewmate details here */}
      <p>name: {post.charName}</p>
      <p>color: {post.color}</p>
      <p>description: {post.description}</p>
    </div>
  );
}

export default CrewmateDetails;
