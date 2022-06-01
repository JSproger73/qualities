import httpServices from './http.services';
const qualityEndpoint = 'quality/';

const qualityService = {
  update: async (id, content) => {
    const { data } = await httpServices.put(qualityEndpoint + id, content);
    return data;
  },
  get: async (id) => {
    const { data } = await httpServices.get(qualityEndpoint + id);
    return data;
  },
  fetchAll: async () => {
    const { data } = await httpServices.get(qualityEndpoint);
    return data;
  },
};

export default qualityService;
