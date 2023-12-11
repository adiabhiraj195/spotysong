import { AiFillHome, AiOutlineSearch } from "react-icons/ai";

const NavigationCol = () => {
    return (
        <div className="bg-custom-black text-white rounded-sm p-2">
            <div className="flex items-center font-bold">
                <AiFillHome />
                <p>Home</p>
            </div>
            <div className="flex items-center font-bold">
                <AiOutlineSearch className="" />
                <p>Search</p>
            </div>
        </div>
    )
}

export default NavigationCol;