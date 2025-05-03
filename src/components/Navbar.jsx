import { useSelector } from "react-redux"
import { Link } from "react-router"

const Navbar = ()=>{
    const cartItems = useSelector((store)=>store.cart.items)
    return <div className="bg-orange-200 py-4 flex items-center justify-between shadow-md shadow-slate-200">
        <div id="brand-logo" className="w-25">
            <img className="" src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png" alt="" />
        </div>
        <div id="links" className="flex px-15 gap-x-10">
            <p className="text-red-900 font-bold text-lg hover:cursor-pointer hover:text-black"><Link to="/">Home</Link></p>
            <p className="text-red-900 font-bold text-lg"><Link to="/about">About</Link></p>
            <p className="text-red-900 font-bold text-lg"><Link to="/cart">Cart {cartItems.length}</Link></p>
        </div>
    </div>
}

export default Navbar