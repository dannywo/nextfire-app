import Link from "next/link";

export default function NavBar() {
    // const { user, username } = {};
    const user = null,
        username = null;

    return (
        <nav className="navbar flex-none">
            <ul className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <li className="mx-4">
                    <Link href="/">
                        <button className="btn-logo">FEED</button>
                    </Link>
                </li>
                {/* User is signed-in and has username */}
                {username && (
                    <>
                        <li className="push-left mx-4">
                            <Link href="/admin">
                                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    Write Posts
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${username}`}>
                                <img src={user?.photoURL} alt="" />
                            </Link>
                        </li>
                    </>
                )}

                {/* User is NOT signed-in OR has NOT created a username */}
                {!username && (
                    <li className="mx-4">
                        <Link href='/enter'>
                            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Log In
                            </button>
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}