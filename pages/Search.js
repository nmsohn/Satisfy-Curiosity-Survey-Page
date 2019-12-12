import React from 'react';
import Layout from '../components/Layout';

///search?keyword=something
const search = ({url}) => {
    return (
        <Layout>
            You searched "{url.query.keyword}"
        </Layout>
    );
};

export default Search;