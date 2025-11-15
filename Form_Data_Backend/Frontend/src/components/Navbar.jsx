import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
		<nav class="flex justify-between px-2 mb-2 mx-4 my-2 sm:my-5 sm:mx-7 my:1 sm border-2 border-[#386BAC]  sm:py-4 sm:px-9">
			<div>
				<Link to="/">
					<div class="flex align-middle  h-[100%] ">
						<img class="w-10 sm:w-14" src="../../src/assets/home.svg" alt="" />
					</div>
				</Link>
			</div>
			<div class="flex items-center">
				<Link
					className="authbuttons"
					class=" border-red-200 px-2 text-0xl sm:px-9 sm:text-2xl "
					to="/login"
				>
					Login
				</Link>
				<Link
					className="authbuttons"
					class="px-2 text-0xl sm:px-9  sm:text-2xl"
					to="/signup"
				>
					Signup
				</Link>
			</div>
		</nav>
	);
}

export default Navbar
