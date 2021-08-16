import Head from "next/head";
import Link from "next/link";
import Paper from '@material-ui/core/Paper';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Layout({ children, title }) {

    return (
        <div>

            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous" />

                <title> {title} </title>
            </Head>

            <Paper className="nav justify-content-center w-5">
                <Link className="nav-item" href="/">
                    <a className={`nav-link fs-3 link-danger`}>Home</a>
                </Link>
                <Link className="nav-item" href="/Posts">
                    <a className={`nav-link fs-3 link-danger`}>Posts</a>
                </Link>
                <Link className="nav-item" href="/Users">
                    <a className={`nav-link fs-3 link-danger`}>Users</a>
                </Link>
            </Paper>

            <div className="m-5" >{children}</div>

            <div className="card-footer justify-content-center align-items-center">
                <div className="d-flex justify-content-center align-items-center" >
                    <GitHubIcon color="secondary" style={{ fontSize: 32 }} />
                    <Link href="https://github.com/addRian0-0" >
                        <a className={`nav-link fs-3 link-danger`}>addRian</a>
                    </Link>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <GitHubIcon color="secondary" style={{ fontSize: 32 }} />
                    <Link href="https://github.com/addRian0-0/Next.js-Example-SSR" >
                        <a className={`nav-link fs-3 link-danger`}>Repository example</a>
                    </Link>
                </div>
            </div>

        </div>
    )
}

Layout.defaultProps = {
    title: "Next.js Example"
}