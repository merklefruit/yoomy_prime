import axios from "axios";

export default async function postRequest(
  endpoint,
  body,
  action,
  errorCallback,
  successCallback
) {
  errorCallback("");
  successCallback("");

  const reqOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
  };
  var reqBody;
  if (body) {
    reqOptions.headers["Content-Type"] = "application/json";
    reqBody = JSON.stringify(body);
  }

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}${endpoint}`,
      reqBody,
      reqOptions
    );
    action(res.data);
    successCallback(
      res.data.message ? res.data.message : "Operazione svolta con successo"
    );
  } catch (err) {
    errorCallback(err.response.data.message);
  }
}
