import { ArrowDownNarrowWide, ChevronDown, Dot, Eye, Heart, View } from "lucide-react";

type PostCardProps = {
  title?: string;
  content?: string;
  img: string;
};
const PostCard = ({ title, content, img }: PostCardProps) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg border-2 border-blue-200  hover:border-blue-500 hover:border-2">
      <div className="flex flex-row items-center justify-between px-4 py-2">
        <p className="text-md font-semibold text-blue-400">@Alejandro</p>
        <p className="text-xs">5 minutes ago</p>
      </div>

      <div className="px-2 ">
        <img className="w-full shadow-md rounded-lg" src={img} alt={title} />
      </div>

      <div className="px-6 py-2">
         <div className="flex flex-row items-center justify-start text-gray-600 gap-2 ">
          <div className="flex flex-row items-center">
            <p className="text-xs">3.5k</p>
            <Eye className="mx-1 my-2" size={15} color="#5f5f5f" />
          </div>
          <div className="flex flex-row items-center">
            <Dot />
            <p className="text-xs"> 12 Apr 26</p>
           
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{content}</p>
          </div>
          <div className="flex flex-col items-center">
            <Heart className="mx-1 " size={30} color="#e53e3e" />
            <span className="text-xl font-bold">12</span>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-2">
        <div className="flex flex-row border-1 border-gray-300 divide-x-1 divide-gray-300 rounded-lg px-3  py-1">
          <div className="flex flex-row items-center px-2">
          <h1 className="">Tools</h1>
          <Dot/>
          <h1 className="">3</h1>
          <ChevronDown size={15} color="#5f5f5f"/>
          </div>
          <div className="flex flex-row items-center px-2">
          <h1 className="">Skill</h1>
          <Dot/>
          <h1 className="">Design</h1>
          <ChevronDown size={15} color="#5f5f5f"/>
          </div>
          
          
        </div>
        </div>
      </div>
    </div>
  );
};
export default PostCard;
