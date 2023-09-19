
import { useState } from "react";
import Links from "../Links/Links";
import { HiOutlineMenuAlt1, HiOutlineChevronDown } from 'react-icons/hi';



const Navbar = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Contact', path: '/contact' },
        { id: 4, name: 'Products', path: '/products' },
        { id: 5, name: 'Services', path: '/services' },
        { id: 6, name: 'Users', path: '/users' }
      ];
    return (
        <div>
            <nav className=" text-black bg-yellow-300 p-5">
                <div className="text-2xl md:hidden bg-yellow-300 " onClick={()=> setOpen(!open)} >
                    {
                        open == true ?
                        <HiOutlineChevronDown></HiOutlineChevronDown>
                        : <HiOutlineMenuAlt1></HiOutlineMenuAlt1>
                    }
                    
                </div>
                <ul className={`md:flex gap-10 bg-yellow-300 px-5 absolute md:static duration-1000 ${open ? ' top-16':' -top-40'}`}>
                    {
                        routes.map(route => <Links key={route.id} route={route}></Links>)
                    }
                </ul>
            </nav>
            
        </div>
        
    );
};

export default Navbar;