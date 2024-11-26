import blogData from "../../mockData/blogData.js";
import { blogTemplate } from "../templates/blogTemplate.js";

const initBlog = (blogNode) => {
  blogNode.insertAdjacentHTML("beforeend", blogTemplate(blogData));
};

export default initBlog;
