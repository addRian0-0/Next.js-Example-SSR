import Layout from "../../Components/Layout";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function Post({ post }) {

    const router = useRouter();

    return (
        <Layout title={`Next.js Example | Post #${router.query.post}`}>
            <div className="d-flex justify-content-center">
                <Card style={{ minWidth: 275, width: 400 }} className="m-4" variant="outlined">
                    <CardContent>
                        <Typography color="secondary" style={{ fontSize: 32 }} >
                            {`${post.title}`}
                        </Typography>
                        <Typography style={{ fontSize: 16 }} component="p">
                            {`${post.body}`}
                        </Typography>
                        </CardContent>
                </Card>
            </div>
        </Layout>
    )
}


export async function getServerSideProps({ params }){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.post}`);
    const post = await res.json();
    return {
        props: {
            post,
            notFound: false
        }
    }
}