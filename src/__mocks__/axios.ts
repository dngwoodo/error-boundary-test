import { AxiosStatic } from 'axios';

const axios = jest.createMockFromModule('axios');
((axios as AxiosStatic).create as jest.Mock).mockReturnThis(); // axios 리턴

export default axios;
