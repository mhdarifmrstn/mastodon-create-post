import axios from "axios";

export default async function createPost(
  token: string,
  serverUrl: string,
  text: string,
) {
  const url = serverUrl + "/api/v1/statuses";
  await axios.post(
    url,
    { status: text },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
}
