const FeaturedPost=()=>{
    return (
        <div className="flex flex-row items-center  shadow-blue-300 shadow-2xl p-2 w-1/4 rounded-lg border-2 border-blue-200 hover:bg-blue-200 cursor-pointe hover:border-blue-400 ">
            <img className="w-1/2 rounded-lg shadow-md mr-4" src="https://images.pexels.com/photos/36760693/pexels-photo-36760693.jpeg" alt="Featured Post" />
            <div className="flex flex-col justify-center gap-1">
            <p className="text-sm font-semibold text-blue-400">@Alejandro</p>
            <h2 className="text-md font-bold ">Featured Post Title</h2>
            <p className="text-gray-700 text-xs font-body">Text Samplef Tolfamedha</p>
            </div>
        </div>
        
    )
}

export default FeaturedPost;