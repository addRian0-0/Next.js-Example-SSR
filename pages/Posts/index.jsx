import Layout from "../../Components/Layout"
import Link from "next/link";
import { Typography } from "@material-ui/core";

export default function Posts({ posts }) {
    return (
        <Layout title="Next.js Example | Posts">
            <h1>Posts | Home</h1>
            {
                posts.map(m => {
                    return <div key={m.id} className="list-group">
                        <Link href={`/Posts/[post]`} as={`/Posts/${m.id}`} >
                            <a className="list-group-item list-group-item-action">
                                <Typography >
                                    Title post:
                                </Typography>
                                <Typography color="secondary">
                                    {m.title}
                                </Typography>
                            </a>
                        </Link>
                    </div>
                })
            }
        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts = await res.json();
    console.log(posts)
    return {
        props: {
            posts,
            notFound: false
        }
    }
}