import FeaturedPost from "../ui/FeaturedPost";

const FaeturedPostPage = () => {
  return (
    <div className="flex flex-col items-center">
    <h1 className="text-3xl font-bold ">Featured Creators</h1>
    <p className="text-body font-medium mb-6">Here are trending Creators to follow</p>
    <div className="flex flex-row justify-center gap-5">
        <FeaturedPost/>
        <FeaturedPost/>
        <FeaturedPost/>
    </div>
    </div>
    )
}

export default FaeturedPostPage;