import axios from 'axios'
const TIMEOUT = 5000;

const createApi = (dispatch) => {
  const api = axios.create({
    baseURL: "http://localhost:3000",
    timeout: TIMEOUT,
    withCredentials: false,
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.response.status === 400) {
    //   dispatch(ActionCreator.auth(false));
      alert("Для продолжения необходимо авторизоваться");
    }
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createApi;