import { SearchIcon } from "lucide-react";

const Search=()=>{
    return(
        <div className="flex flex-row justify-center items-center my-5">
                <input className="border-2 border-gray-300 rounded-lg px-4 py-2 h-8 w-2/3" placeholder="Search..." />
                <SearchIcon size={20} color="#5f5f5f"/>
        </div>
    )
}

export default Search;