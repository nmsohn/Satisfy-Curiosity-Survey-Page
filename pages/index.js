import Layout from '../components/Layout';
import Head from 'next/head';

const index = (props) => {
    return(
        <Layout>
            <Head>
                <title>
                    Index 페이지
                </title>
            </Head>
            <h1>home</h1>
        </Layout>
    );
};

export default index;