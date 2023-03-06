import { useRouter } from "next/router";
import Head from "next/head";

export async function getServerSideProps({ params }) {
  const req = await fetch(`http://localhost:3000/${params.id}.json`);
  const data = await req.json();

  return {
    props: { car: data },
  };
}

export default function Car({ car }) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <Head>
        <title>
          {car.color} {car.id}
        </title>
      </Head>

      <main>
        <h1>{id}</h1>

        <img src={car.image} width='300px' />
      </main>
    </div>
  );
}
