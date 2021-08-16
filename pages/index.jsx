import Link from "next/dist/client/link";
import Layout from "../Components/Layout";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Index() {
    return (
        <Layout title="Next.js Example | Home" >
            <h1>Example of Next.js</h1>
            <div className="d-flex justify-content-center">
                <Card style={{ minWidth: 275, width: 400 }} className="m-4 " variant="outlined">
                    <CardContent>
                        <Typography color="secondary" style={{ fontSize: 32 }} >
                            API Users
                        </Typography>
                        <Typography style={{ fontSize: 16 }} component="p">
                            Consume data from an API rest to fetch personal data.
                        </Typography>
                        <Typography style={{ marginBottom: 10 }} color="textSecondary">
                            Fake rest API link:
                        </Typography>
                        <Link href="https://jsonplaceholder.typicode.com/users">
                            <Typography color="secondary">
                                <a>https://jsonplaceholder.typicode.com/users</a>
                            </Typography>
                        </Link>
                    </CardContent>
                    <CardActions className="justify-content-center" >
                        <Link href="/Users">
                            <a>
                                <Button color="secondary" variant="contained">Go to example</Button>
                            </a>
                        </Link>
                    </CardActions>
                </Card>
                <Card style={{ minWidth: 275, width: 400 }} className="m-4" variant="outlined">
                    <CardContent>
                        <Typography color="secondary" style={{ fontSize: 32 }} >
                            API POSTS
                        </Typography>
                        <Typography style={{ fontSize: 16 }} component="p">
                            Consume data from an API rest to fetch data posts.
                        </Typography>
                        <Typography style={{ marginBottom: 10 }} color="textSecondary">
                            Fake rest API link:
                        </Typography>
                        <Link href="https://jsonplaceholder.typicode.com/posts">
                            <Typography color="secondary">
                                <a>https://jsonplaceholder.typicode.com/posts</a>
                            </Typography>
                        </Link>
                    </CardContent>

                    <CardActions className="justify-content-center" >
                        <Link href="/Posts">
                            <a>
                                <Button color="secondary" variant="contained">Go to example</Button>
                            </a>
                        </Link>
                    </CardActions>
                </Card>
            </div>
        </Layout>
    );
}
