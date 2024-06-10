import React,{useEffect,useState} from "react";
import { Link,useNavigate } from "react-router-dom";
;

export default function Header() {

    const [basicInfo, setBasicInfo] = useState({});
    
    const [loading, setLoading] = useState(true);

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
          <a href="#welcomeCom">
            <li className="hidden sm:inline hover:text-blue-400">
              Home
            </li>
          </a>
          
          <a href="#eduCom">
            <li className="hidden sm:inline  hover:text-blue-400">
              Education
            </li>
          </a>
          <a href="#exeCom">
            <li className="hidden sm:inline hover:text-blue-400">
                Experience
            </li>
          </a>
          <a href="#projectCom">
            <li className="hidden sm:inline hover:text-blue-400">
                projects
            </li>
          </a>
          <a href="#certificateCom">
            <li className="hidden sm:inline hover:text-blue-400">
              Certificate
            </li>
          </a>
          <a href="#contactCom">
            <li className="hidden sm:inline  hover:text-blue-400">
              Contact
            </li>
          </a>

          
        </ul>
      </div>
    </header>
  );
}
