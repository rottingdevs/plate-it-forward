async function sendRequest(url, method, data) {
  const options = { method, headers: new Headers() };
  options.headers.append("Content-Type", "application/json");
  options.body = JSON.stringify(data);
  return fetch(`http://127.0.0.1:8000/${url}`, options).then((res) => res.json());
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


async function test() {
  try {
    console.log("Hello World:", await helloWorld());
    // console.log("Locations:", await getLocations());
    // console.log("Post Request:", await examplePostRequest("testUser", "testPass"));
    console.log("User Info:", (await getUserInfo("bobiscool")).username);
    console.log("All Users:", await getAllUsers());
    // console.log("User Foods:", await getUserFoods("testUser"));
    console.log("All Foods:", await getAllFoods());
  } catch (error) {
    console.error("Error:", error);
  }
}

test();