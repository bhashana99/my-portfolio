import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Header() {

    const [basicInfo, setBasicInfo] = useState({});
    const [showMenu, setShowMenu] = useState(true);
    
    const [loading, setLoading] = useState(true);

    const handleMenu = () => {
      setShowMenu(!showMenu);
    };
  
    const handleClick = () => {
      setShowMenu(!showMenu);
    };

    useEffect(() => {
        const fetchBasicInfo = async () => {
          try {
            const res = await fetch("/api/basicInfo/get-basicInfo");
            const data = await res.json();
            setBasicInfo(data);
            
            setLoading(false);
          } catch (error) {
            console.log(error);
          }
        };

        fetchBasicInfo();
    }, []);
  return (
    <header className="bg-blue-800 shadow-md w-full fixed md:py-2 py-1">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap ">
           
            <span className="text-yellow-300" id="brandName-show">{basicInfo.brandName}</span>
          </h1>
        </Link>

        
        <ul className="flex gap-4 font-mono  text-blue-200 ">
          <a href="#welcomeCom" >
            <li className="hidden sm:inline hover:text-blue-400">
              Home
            </li>
          </a>
          
          <a href="#eduCom" >
            <li className="hidden sm:inline  hover:text-blue-400">
              Education
            </li>
          </a>
          <a href="#exeCom">
            <li className="hidden sm:inline hover:text-blue-400">
                Experience
            </li>
          </a>
          <a href="#projectCom" onClick={handleClick}>
            <li className="hidden sm:inline hover:text-blue-400">
                projects
            </li>
          </a>
          <a href="#certificateCom" >
            <li className="hidden sm:inline hover:text-blue-400">
              Certificate
            </li>
          </a>
          <a href="#contactCom" >
            <li className="hidden sm:inline  hover:text-blue-400">
              Contact
            </li>
          </a>

          
        </ul>
        <div onClick={handleMenu} className="block md:hidden">
          {!showMenu ? (
            <AiOutlineClose size={30} />
          ) : (
            <AiOutlineMenu size={30} />
          )}
        </div>

        <div
          className={
            !showMenu
              ? "fixed left-0 top-0 w-[80%] h-full border-r border-r-blue-900  bg-blue-700 ease-in-out duration-500 "
              : "fixed left-[-100%] "
          }
        >
          <ul className=" text-blue-200 pt-20 font-bold ">
          <a href="#welcomeCom" onClick={handleClick}>
            <li className="p-3 border-b border-blue-600">
              Home
            </li>
          </a>
          
          <a href="#eduCom" onClick={handleClick}>
            <li className="p-3 border-b border-blue-600">
              Education
            </li>
          </a>
          <a href="#exeCom" onClick={handleClick}>
            <li className="p-3 border-b border-blue-600">
                Experience
            </li>
          </a>
          <a href="#projectCom" onClick={handleClick}>
            <li className="p-3 border-b border-blue-600">
                projects
            </li>
          </a>
          <a href="#certificateCom" onClick={handleClick}>
            <li className="p-3 border-b border-blue-600">
              Certificate
            </li>
          </a>
          <a href="#contactCom" onClick={handleClick}>
            <li className="p-3 border-b border-blue-600">
              Contact
            </li>
          </a>

          
        </ul>
        </div>
      </div>
    </header>
  );
}
