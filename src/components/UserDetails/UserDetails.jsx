import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData()
    return (
        <div className=" text-center">
            <h1 className=" font-bold">{user.name}</h1>
        </div>
    );
};

export default UserDetails;