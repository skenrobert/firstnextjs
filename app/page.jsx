import Users from "../components/Users";

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  //console.log(data); // note execute in server not in the browser
  return data.data;
}

async function IndexPage() {
  const users = await fetchUsers();

  return (
    <div>
      {/* {JSON.stringify(users)} */}
      <Users users={users} />
    </div>
  );
}

export default IndexPage;