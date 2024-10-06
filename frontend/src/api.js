async function sendRequest(url, method, data) {
  const options = { method, headers: new Headers() };
  options.headers.append("Content-Type", "application/json");
  options.body = JSON.stringify(data);
  return fetch(`https://dev.plateitforward.co/${url}`, options).then((res) => res.json());
}

export async function helloWorld() {
  return sendRequest("", "GET");
}

export async function getLocations() {
  return sendRequest("locations", "GET");
}

export async function examplePostRequest(user, pw) {
  // this sends a POST request to http://localhost:8080/user with the body
  // { username: "something", password: "something else"
  return sendRequest("user", "POST", { username: user, password: pw });
}

export async function getUserInfo(username) {
  return sendRequest(`user/${username}`, "GET");
}

export async function getAllUsers() {
  return await sendRequest("users", "GET");
}

export async function getUserFoods(username) {
  return await sendRequest(`${username}/foods`, "GET");
}

export async function getAllFoods() {
  return await sendRequest(`foods`, "GET");
}
