import { User } from "@/app/users/page";

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
    <div className="fixed top-0 left-0 w-screen h-screen bg-black/50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6">
        <h1 className="font-bold text-2xl">{user.id}</h1>
        <p>
          Name: {user.firstName} {user.lastName}{" "}
        </p>
        <a className="border p-1 bg-red-500 text-white" href="/users">
          Close
        </a>
      </div>
    </div>
  );
};

export default page;
