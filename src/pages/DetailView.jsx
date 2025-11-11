import CrewmateDetails from "../components/CrewmateDetails";
import { useParams, Link } from "react-router";

const DetailView = () =>{
    const { id } = useParams();
    return(
        <div>
            <CrewmateDetails/>
            <Link to={"/edit/" + id}>
                <p>Edit</p>
            </Link>
        </div>
    )
}

export default DetailView;