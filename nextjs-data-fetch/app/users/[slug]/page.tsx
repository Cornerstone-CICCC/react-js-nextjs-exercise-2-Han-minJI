import { User } from "../page";

type Props = {
  params: Promise<{ slug: string }>;
};

const page = async ({ params }: Props) => {
  const { slug } = await params;
  let user: User;

  try {
    const res = await fetch(`https://dummyjson.com/users/${slug}`);
    const data = await res.json();
    user = data;
  } catch (err) {
    console.error(err);
    throw new Error("Unable to show post");
  }

  return (
    <div>
      <h1>{user.id}</h1>
      <div>
        <p>
          Name: {user.firstName} {user.lastName}{" "}
        </p>
        <p>Age: {user.age} </p>
        <p>Gender: {user.gender} </p>
        <p>Email: {user.email} </p>
      </div>
    </div>
  );
};

export default page;
