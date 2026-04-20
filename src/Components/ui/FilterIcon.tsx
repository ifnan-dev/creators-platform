import { LayoutGrid } from "lucide-react";

type FilterIconProps={
    name:string;
    icon:React.ReactNode
}

const FilterIcon = (props: FilterIconProps)=>{
    return(
        <div className="flex flex-row gap-1 px-2 py-1 border-1 border-gray-300 rounded-lg items-center cursor-pointer hover:bg-gray-200">
           {props.icon}
            <p className="text-xs font-semibold">{props.name}</p>
        </div>
    )
}

export default FilterIcon;