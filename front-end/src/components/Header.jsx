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
    <header className="bg-slate-200 shadow-md w-full fixed md:py-2 py-1">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap ">
           
            <span className="text-slate-700" id="brandName-show">{basicInfo.brandName}</span>
          </h1>
        </Link>

        
        <ul className="flex gap-4 font-mono text-slate-700  ">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          
          <Link to="">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Education
            </li>
          </Link>
          <Link to="">
            <li className="hidden sm:inline text-slate-700 hover:underline">
                Experience
            </li>
          </Link>
          <Link to="">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Certificate
            </li>
          </Link>
          <Link to="">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Contact
            </li>
          </Link>

          
        </ul>
      </div>
    </header>
  );
}
