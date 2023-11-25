import { useEffect, useState } from "react";

const PostsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <ul>
      {data.map(({ body, id, title }) => (
        <li key={id}>
          <h3>{title}</h3>

          <span>{body}</span>
        </li>
      ))}
    </ul>
  );
};

export default PostsPage;
