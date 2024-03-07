import React, { useState } from "react"; // Importing React library and useState hook
import logoWithNoText from "./Images/logoWithNoText.png"; // Importing logo image
import { GoSearch } from "react-icons/go"; // Importing GoSearch icon from react-icons/go
import { useAuth } from "../pages/Auth"; // Importing useAuth hook from Auth page
import axios from "axios"; // Importing axios library
import { NavLink, useNavigate } from "react-router-dom"; // Importing NavLink and useNavigate from react-router-dom


function Header() {
  const auth = useAuth(); // Initializing auth hook from Auth page
  const navigate = useNavigate(); // Initializing navigate function from react-router-dom
  const [isOpen, setIsOpen] = useState(false); // Initializing state for dropdown menu

  const [autocompleteResults, setAutocompleteResults] = useState([]); // Initializing state for autocomplete results
  
  // Function to handle user logout
  function logout() {
    auth.logout(); // Logging out user
    navigate("/"); // Redirecting user to homepage
  }
  // Function to fetch autocomplete results for search
  const fetchAutocompleteResults = async (searchTerm) => {
    try {
      const response = await axios.get(
        `https://api.iex.cloud/v1/search/${searchTerm}?token=${process.env.REACT_APP_API_TOKEN}`
      );
      
      setAutocompleteResults(response.data);
    } catch (error) {
      //Handle Error Here
    }
  };

  // Function to handle balance recharge
  const handleRecharge = () => {
    axios
      .post(
        "http://localhost:4000/user/recharge",
        {},
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        alert("Recharge successful");
        window.location.reload();
        // Handle success (e.g., update UI, show success message)
      })
      .catch((error) => {
        console.error("Error recharging balance:", error);
        if (error.response && error.response.status === 401) {
          // Remove the token from localStorage
          localStorage.removeItem("token");
          // Redirect the user to the home page
          window.location.href = "/login"; // Replace '/' with your home page URL
        }
        // Handle error (e.g., show error message)
      })
      .finally(() => {});
  };
  return (
    <div>
      <div className="flex flex-row gap-3 max-sm:gap-1 justify-around items-center">
        <div className="w-2/12 max-sm:w-auto max-md:w-auto">
          <NavLink to={"/"}>
            <img
              src={logoWithNoText}
              className="h-16 p-2"
              alt="logo robin hood "
            />
          </NavLink>
        </div>
        <div className="relative w-3/12 max-sm:w-auto max-md:w-auto flex flex-col">
          <div className="flex border flex-row flex-nowrap items-center  px-2 rounded-md">
            <span className="text-2xl hover:cursor-pointer font-bold text-gray-600">
              <GoSearch />
            </span>
            <input
              type="text"
              className="w-full h-10 outline-none border-none p-2"
              placeholder="Search"
              name="search"
              autoComplete="off"
              onChange={(e) => {
                const searchTerm = e.target.value;
                if (searchTerm.length > 0) {
                  fetchAutocompleteResults(searchTerm);
                  setIsOpen(true);
                }
              }}
            />
          </div>
           {/* Autocomplete dropdown */}
          {autocompleteResults.length > 0 && isOpen && (
            <div className=" p-2 absolute top-[37px] bg-white w-full mt-2 flex flex-col rounded-md border border-gray-300 gap-1 z-10">
              <span className="font-bold text-base p-2">Stocks</span>
              {autocompleteResults.map((result, index) => {
                return (
                  <NavLink
                    to={"/detail/" + result.symbol}
                    key={index}
                    className="pl-4 pb-2 gap-10 font-semibold cursor-pointer flex flex-row  hover:bg-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{result.symbol}</span>
                    <span className="truncate ">{result.name}</span>
                  </NavLink>
                );
              })}
            </div>
          )}
        </div>

        <div className="w-4/12 max-sm:w-auto max-md:w-auto flex flex-row flex-nowrap items-center justify-center gap-12 max-sm:gap-2 max-md:gap-2 max-lg:gap-2 text-base font-medium">
          <span
            onClick={() => alert("Coming soon!")}
            className=" hover:cursor-pointer max-sm:hidden max-md:hidden max-lg:hidden hover:text-green-500"
          >
            Rewards
          </span>
          <span
            onClick={() => alert("Coming soon!")}
            className=" hover:cursor-pointer max-sm:hidden max-md:hidden max-lg:hidden hover:text-green-500"
          >
            Crypto
          </span>
          <span
            onClick={() => alert("Coming soon!")}
            className=" hover:cursor-pointer max-sm:hidden max-md:hidden max-lg:hidden hover:text-green-500"
          >
            Retirement
          </span>

          {auth.user && (
            <div className="dropdown">
              <span className=" hover:cursor-pointer hover:text-green-500 dropbtn hover:bg-white">
                Account
              </span>
              <div className="dropdown-content">
                <span>
                  <NavLink
                    to={"/profile"}
                    className=" cursor-pointer hover:text-green-500"
                  >
                    Profile
                  </NavLink>
                </span>
                <span
                  onClick={logout}
                  className=" cursor-pointer hover:text-green-500"
                >
                  Logout
                </span>
              </div>
            </div>
          )}
          {/* Balance recharge */}
          {auth.user && (
            <span
              onClick={handleRecharge}
              className=" border rounded-md max-sm:text-sm max-sm:w-max max-sm:p-1 max-lg:text-sm max-xl:text-sm  px-2 py-2 text-base font-semibold border-green-500 hover:text-white text-green-500 hover:bg-green-500 cursor-pointer hover:scale-105"
            >
              Recharge 1000$
            </span>
          )}
        </div>
        {/* Login and Sign up links */}
        {!auth.user && (
          <div className="flex flex-row flex-nowrap gap-4">
            <NavLink
              to={"/login"}
              className=" border rounded-md w-max max-sm:px-1 max-sm:text-sm max-sm:py-1  px-6 py-2 text-base font-semibold border-green-500 hover:text-white text-green-500 hover:bg-green-500 cursor-pointer hover:scale-105"
            >
              Login
            </NavLink>
            <NavLink
              to={"/register"}
              className=" border rounded-md w-max max-sm:px-1 max-sm:text-sm max-sm:py-1 px-6 py-2 text-base font-semibold border-green-500 text-white bg-green-500 hover:text-green-500 hover:bg-white cursor-pointer hover:scale-105"
            >
              Sign up
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
