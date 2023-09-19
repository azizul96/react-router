import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, email, phone} = user
    return (
        <div className="text-center border-2 border-red-500 rounded-lg">
            <h1 className="font-bold text-lg">{name}</h1>
            <p>User ID: {id}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}><button>Show Details</button></Link>
        </div>
    );
};

export default User;