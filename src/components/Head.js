import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../Utils/constants";

const Head = () => {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const dispatch = useDispatch();

    const handletoggle = () =>{
        dispatch(toggleMenu());
    }
 
    useEffect(()=>{
        
        const timer = setTimeout(()=> fetchSearchResults(),200);

        return(()=>clearTimeout(timer));

    },[searchText]);

   
    async function fetchSearchResults () {
        const data = await fetch(YOUTUBE_SEARCH_API+searchText);
        const jsondata = await data.json();
        console.log(jsondata[1]);
        setSearchResults(jsondata[1]);
    }

    return (
        <div className="grid grid-flow-col shadow-md m-2 p-2">
            <div className="flex col-span-1">
                <img className="h-10 cursor-pointer"
                    onClick={()=>handletoggle()}
                    alt='menu' 
                    src="https://th.bing.com/th/id/OIP.8zvPD-sJ-ttQZJPZgfQPgQAAAA?rs=1&pid=ImgDetMain">
                </img>
                <img className="h-14 mx-2"
                    alt='logo' 
                    src="https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png">
                </img>
            </div>
            <div className="col-span-10">
                <div>
                    <input
                        className="border border-gray-400 w-1/2 rounded-l-full p-2" 
                        type="text"
                        value={searchText}
                        onChange={(e)=>setSearchText(e.target.value)}
                    />
                    <button className="border border-gray-400 rounded-r-full p-2">
                        🔍
                    </button>
                </div>
                {searchResults.length>0 && <div className="py-1">
                    <ul className="fixed bg-white w-[24rem] m-2 p-2 rounded-lg shadow-lg">
                        {searchResults.map((res)=><li className="py-1 hover:bg-gray-100">{"🔍" + res}</li>)}
                    </ul>
                </div>}
            </div>
            <div className="col-span-1">
                <img className="h-12"
                alt='user'
                src='https://th.bing.com/th/id/R.8e2c571ff125b3531705198a15d3103c?rik=gzhbzBpXBa%2bxMA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-big-image-png-2240.png&ehk=VeWsrun%2fvDy5QDv2Z6Xm8XnIMXyeaz2fhR3AgxlvxAc%3d&risl=&pid=ImgRaw&r=0'>
                </img>
            </div>
        </div>
    )
}

export default Head;