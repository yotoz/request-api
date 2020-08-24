import React, {
  useEffect,
  useCallback,
  useReducer,
} from 'react';
import axios from 'axios';

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

const AxiosPost = () => {
  const [state, dispatch] = useReducer(reducer, {
    title: 'TEST TITLE',
    body: 'TEST BODY',
  });
  const { title, body } = state;
  const handleSubmit = useCallback(() => {
    axios
      .post(CREATE_POST_API, {
        title,
        body,
        userId: USER_ID,
      })
      .then((res) => {
        console.log(res.data);
      });
  }, [title, body]);

  const onChange = (e) => dispatch(e.target);

  useEffect(() => {
    axios.get(GET_POSTS_API).then((res) => {
      console.log(res.data);
    });
  }, []);
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
    </div>
  );
};

export default AxiosPost;
