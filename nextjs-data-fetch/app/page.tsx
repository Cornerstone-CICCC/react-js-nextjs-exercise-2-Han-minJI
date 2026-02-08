import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | My App",
  description: "This is my home page",
};

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
        neque qui. Facere eveniet assumenda id laudantium quasi beatae ipsum et.
      </p>
    </div>
  );
};

export default Home;
