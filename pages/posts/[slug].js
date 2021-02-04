import { useRouter } from 'next/router';

export default function Post({id,name,email}) {
  const router = useRouter();
  return router.isFallback ? (
    <p>loading...</p>
  ) : (
    <div>
      <h1 className="py-10 px-10">static side generation(SSG)  -Basic</h1>
      <div className="holder mx-auto h-100 w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
                  <div className="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
                    <h2>{id}</h2>
                    <h3>{name}</h3>
                    <p>{email}</p>
                </div>
                </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  const data = await fetch(
    `https://jsonplaceholder.typicode.com/comments/${slug}`
    
  ).then((res) => res.json());
    console.log(data,"data")
  return {
    props: {
      ...data,
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          slug: '1',
        },
      },
      {
        params: {
          slug: '2',
        },
      },
      {
        params: {
          slug: '3',
        },
      },
    ],
    fallback: true,
  };
}