import { useState, useEffect } from 'react'
import Card from '../components/Card'
import { supabase } from '../client'
import { Link } from 'react-router'

const ReadPosts = (props) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const {data} = await supabase
            .from('Crewmates')
            .select();
            // set state of posts
            setPosts(data)
        }
        fetchPosts()
    }, [props])
    
    return (
        <div className="ReadPosts">
            <Link to="/"><button className="headerBtn"> All Crewmates  </button></Link>
        <Link to="/new"><button className="headerBtn"> New Crewmate </button></Link>
            {
                posts && posts.length > 0 ?
                [...posts]
                .sort((a, b) => b.id - a.id) // most recently created has largest id
                .map((post,index) => 
                    <Card 
                        key={post.id}
                        id={post.id} 
                        charName={post.charName}
                        color={post.color}
                    />
                ) : <h2>{'No Challenges Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadPosts