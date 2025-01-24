
import { auth } from "@clerk/nextjs/server";
import { fetchPosts } from "@/lib/postDataFetch";
import Post from "./Post";

export default async function PostList() {
  const {userId} = auth()
  console.log(userId)

  if (!userId) {
    return
  }

  const posts = await fetchPosts(userId)
 

  return (
    <div className="space-y-4">
      {posts.length ? (
        posts.map((post) => 
        <Post post={post} key={post.id}/>
      )):(
      <>ポストが見つかりません。</>)}
    </div>
  );
}
