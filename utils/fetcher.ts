import axios from "axios";

export const fetcher = async (url: string) => {
  const data = axios
    .get(url, {
      headers: {
        Authorization: `token ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    })
    .then((res) => res.data);
  return data;
};
