import Layout from "../components/Layout";
import Post from "../components/Post";
import { getAllPostsData } from "../lib/posts";

const Blog = () => {
  return <Layout title="Blog">Blog page</Layout>;
};

export default Blog;

export async function getStaticProps() {}
