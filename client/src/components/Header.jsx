import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link} from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  
  const { currentUser } = useSelector((state) => state.user);
  return (
    <header>
      <Navbar className="border-b-2">
        <Link
          to="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        >
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
            Satya&apos;s
          </span>
          Blog
        </Link>

        <form role="search" aria-label="Search form">
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            className="hidden lg:inline "
            aria-label="Search"
          ></TextInput>
        </form>

        <Button
          className="w-12 h-10 lg:hidden"
          color="gray"
          pill
          aria-label="Search"
        >
          <AiOutlineSearch />
        </Button>

        <div className="flex gap-2 md:order-2">
          <Button
            className="w-12 h-10 hidden sm:inline "
            color="gray"
            pill
            aria-label="Toggle Dark Mode"
          >
            <FaMoon />
          </Button>
          {currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={<Avatar alt="user" img={currentUser.profilePicture} rounded> 
                 
              </Avatar>}
            >
              <Dropdown.Header>
                <span className="block text-sm">@{currentUser.username}</span>
                <span className="block text-sm font-medium truncate">{currentUser.email}</span>
              </Dropdown.Header>
              <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>
                Profile
              </Dropdown.Item>

              </Link>
              <Dropdown.Divider />
              <Dropdown.Item>
                Sign Out
              </Dropdown.Item>
            </Dropdown>
          ) : (
            <Link to="/sign-in">
              <Button gradientDuoTone="purpleToBlue" outline>
                Sign In
              </Button>
            </Link>
          )}

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <nav>
            <ul className="flex items-center  gap-x-8">
              <li>
                <Navbar.Link>
                  <Link to="/">Home</Link>
                </Navbar.Link>
              </li>

              <li>
                <Navbar.Link>
                  <Link to="/about">About</Link>
                </Navbar.Link>
              </li>

              <li>
                <Navbar.Link>
                  <Link to="/project">Project</Link>
                </Navbar.Link>
              </li>
            </ul>
          </nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
