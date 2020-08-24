import React, {
  useState,
  useEffect,
  useCallback,
  useReducer,
} from 'react';

const GET_POSTS_API =
  'https://jsonplaceholder.typicode.com/posts';
const CREATE_POST_API =
  'https://jsonplaceholder.typicode.com/posts';
const USER_ID = 1;

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [state, dispatch] = useReducer(reducer, {
    title: 'TEST TITLE',
    body: 'TEST BODY',
  });
  const { title, body } = state;

  useEffect(() => {
    fetch(GET_POSTS_API)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setPosts(json);
      });
  }, []);

  const handleSubmit = useCallback(() => {
    fetch(CREATE_POST_API, {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
        userId: USER_ID,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, [title, body]);

  const onChange = (e) => dispatch(e.target);

  return (
    <div>
      <h2>FORM</h2>
      <div>
        <input
          type="text"
          placeholder="title"
          name="title"
          value={title}
          onChange={onChange}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="body"
          name="body"
          value={body}
          onChange={onChange}
        />
      </div>
      <button type="button" onClick={handleSubmit}>
        SUBMIT
      </button>
      <hr />
      {posts.map(({ id, title, body }) => (
        <div key={id} style={{ marginBottom: 20 }}>
          <h1>{title}</h1>
          <p>{body}</p>
          <hr></hr>
        </div>
      ))}
    </div>
  );
};

export default Post;
