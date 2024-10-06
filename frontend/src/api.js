async function sendRequest(url, method, data) {
  const options = { method, headers: new Headers() };
  options.headers.append("Content-Type", "application/json");
  options.body = JSON.stringify(data);
  return fetch(`http://localhost:8080/${url}`, options).then((res) => res.json());
}

export async function helloWorld() {
  return sendRequest("", "GET");
}

export async function examplePostRequest(user, pw) {
  // this sends a POST request to http://localhost:8080/user with the body
  // { username: "something", password: "something else"
  return sendRequest("/user", "POST", { username: user, password: pw });
}