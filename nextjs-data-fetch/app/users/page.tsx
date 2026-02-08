import Link from "next/link";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
}

const Users = async () => {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();
  const users: User[] = data.users;

  return (
    <div>
      <h1 className="font-bold text-xl p-2">Users</h1>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            <Link
              href={`/users/${u.id}`}
              className="font-bold text-blue-500 underline"
            >
              {u.firstName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
