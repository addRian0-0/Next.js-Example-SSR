import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import Layout from "../../Components/Layout";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function User({ user }) {

    const router = useRouter();

    return (
        <Layout title={`Next.js Example | User #${router.query.user}`}>
            <div className="d-flex justify-content-center">
                <Card style={{ minWidth: 275, width: 400 }} className="m-4" variant="outlined">
                    <CardContent>
                        <Typography color="secondary" style={{ fontSize: 32 }} >
                            {`${user.username}`}
                        </Typography>
                        <Typography style={{ fontSize: 16 }} component="p">
                            Name: {`${user.name}`} <br/>
                            Email: {`${user.email}`} <br/>
                            Company: {`${user.company.name}`} <br/>
                        </Typography>
                        <Typography style={{ marginBottom: 10 }} color="textSecondary">
                            Website:
                        </Typography>
                        <Link href={user.website}>
                            <Typography color="secondary">
                                <a>{`${user.website}`}</a>
                            </Typography>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </Layout>
    )
}


export async function getServerSideProps({ params }) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.user}`);
    const user = await res.json();
    console.log(user)
    return { props: { user, notFound: false } }

}