import axios from "axios";
import { useEffect, useState } from "react";

export const useUrl = (url, params) => {
  const [data, setData] = useState([])
  const options = {
    url: `https://api.themoviedb.org/3${url}`,
    params: {
      ...params,
      api_key: '3deb2ae011b05f1ba4d5a5dad095f61b'
    }
  };

  useGetApi(options, setData)
  
}

const useGetApi = (options, setData) => {
  useEffect( () => {
    axios({
      method: 'get',
      url: options.url,
      params: options.params
    }).then((resp) => {
      setData(resp.data)
    }).catch((e) => {
      console.log(e)
    })
  }, [])
}



