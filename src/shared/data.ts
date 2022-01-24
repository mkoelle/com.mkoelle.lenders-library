import axios from "axios";

import { Resource } from "./interfaces";
import { API_URL } from "./config";

const getResources = async function(): Promise<Array<Resource>> {
  const response = await axios.get<Array<Resource>>(
    `${API_URL}/resources.json`
  );
  return response.data;
};

export const data = {
  getResources
};
