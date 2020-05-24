const getUser = (email) => {
  fetch("http://localhost:3000/api/signup", {
    method: "POST",
    mode: "cors",
    credentials: "omit",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email }) // body data type must match "Content-Type" header
  })
    .catch((err) => console.log(err, "There was an error creating an user"));
};

export default getUser;
