import type { ReactNode } from "react";
import FilterIcon from "../ui/FilterIcon";
import { Image, LayoutGrid } from "lucide-react";



const FilterRow=()=>{
    return(
        <div className="flex flex-row items-center gap-4 mt-4">

            <FilterIcon 
            name="All"
            icon={<LayoutGrid size={15} />} 
            />
            <FilterIcon 
            name="images"
            icon={<Image size={15} />} 
            />
           
        </div>
    )
}
export default FilterRow;