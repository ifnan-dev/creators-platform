import PostCard from "../ui/PostCard";

const PostCardPage = () => {
  return (
    <div className="py-5">
      <PostCard
        title="Sample Title"
        content="This is a sample post content."
        img="https://images.pexels.com/photos/36760693/pexels-photo-36760693.jpeg"
      />
    </div>
  );
};

export default PostCardPage;
