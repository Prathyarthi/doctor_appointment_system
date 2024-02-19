import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Layout({ children }) {
    const { user } = useSelector(state => state.user)
    // console.log(user);
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <div className="flex-shrink-0 w-64 bg-gray-800">
                {/* User Section */}
                <div className="flex items-center justify-between p-4">
                    <div className="text-white">USER</div>
                    {/* You can replace the text "USER" with the user's name or username */}
                </div>

                {/* Sidebar Content */}
                <nav>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/link1" className="text-white hover:bg-gray-700 px-4 py-2 block">
                                Link 1
                            </Link>
                        </li>
                        <li>
                            <Link to="/link2" className="text-white hover:bg-gray-700 px-4 py-2 block">
                                Link 2
                            </Link>
                        </li>
                        <li>
                            <Link to="/link3" className="text-white hover:bg-gray-700 px-4 py-2 block">
                                Link 3
                            </Link>
                        </li>
                        <li>
                            <Link to="/link4" className="text-white hover:bg-gray-700 px-4 py-2 block">
                                Link 4
                            </Link>
                        </li>
                        <li>
                            <Link to="/link5" className="text-white hover:bg-gray-700 px-4 py-2 block">
                                Link 5
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex flex-col flex-1 overflow-y-auto">
                {/* Navbar */}
                <header className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
                    {/* Notification Icon */}
                    <div>
                        {/* Replace with your notification icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {/* Notification Icon SVG */}
                        </svg>
                    </div>

                    {/* Username */}
                    <div>
                        {/* Replace with username */}
                        {user?.username}
                    </div>
                </header>

                {/* Main Body Content */}
                <main className="flex-1 p-4">
                    {/* Body Content */}
                    {children}
                </main>
            </div>
        </div>
    );
}

export default Layout;
