
import { Link } from "react-router-dom";
const Links = ({route}) => {
    return (
        <li className=" hover:bg-red-500 ">
            <Link to ={route.path} >{route.name}</Link>
        </li>
    );
};



export default Links;