import Layout from "../../Components/Layout";
import Link from "next/link";

export default function Users({ users }) {
    return (
        <Layout title="Next.js Example | Users" >
            {console.log(users)}
            <h1>Users | Home</h1>
            {
                users.map(u => {
                    return <div key={u.id} className="list-group">
                        <Link href={`/Users/[user]`} as={`/Users/${u.id}`}>
                            <a className="list-group-item list-group-item-action">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">{u.username}</h5>
                                </div>
                                <p className="mb-1">
                                    Name: {u.name} <br />
                                    Email: {u.email} <br />
                                </p>
                                <small className="text-muted text-danger">Click for more information</small>
                            </a>
                        </Link>
                    </div>
                })
            }
        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    return {
        props: { users, notFound: false }
    }
}
