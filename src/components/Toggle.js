import { Link } from "react-router-dom";

function Toggle() {
    return (
        <div className="flex flex-row justify-center">
            <div className="p-4">
                <Link to="/register" className="bg-teal-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                    Sign Up
                </Link>
            </div>
            <div className="p-4">
                <Link to="/login" className="bg-teal-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Login
                </Link>
            </div>
        </div>
    );
}

export default Toggle;
