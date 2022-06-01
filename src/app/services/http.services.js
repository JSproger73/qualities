import axios from 'axios';
import logger from './log.service';
import { toast } from 'react-toastify';
import config from '../config.json';

axios.defaults.baseURL = config.apiEndPoint;

axios.interceptors.response.use(
  (resp) => resp,
  function (error) {
    const expectedError =
      error.response && error.response.status >= 400 && error.response.status < 500;
    if (!expectedError) {
      logger.log(error);
      toast.error('Unexpected Error');
    }
    return Promise.reject(error);
  },
);

const httpServices = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default httpServices;
