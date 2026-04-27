import { Feather } from "lucide-react";
import Header from "../common/Header";
import PostCard from "../ui/PostCard";
import FeaturedPost from "../ui/FeaturedPost";
import FaeturedPostPage from "./FeaturedPostPage";
import PostCardPage from "./PostCardPage";
import FilterRow from "./FilterRow";
import Search from "../ui/Search";

const HomePage = () => {
  return (
    <div className="px-10 py-6">
      <Header />
      <Search/>
        <FaeturedPostPage/>
    <FilterRow/>
      <PostCardPage/>
    </div>
  );
};

export default HomePage;
