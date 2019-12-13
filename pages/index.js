import Layout from '../components/Layout';
import Head from 'next/head';
import {
    Form,
    Select,
    InputNumber,
    DatePicker,
    Switch,
    Slider,
    Button,
  } from 'antd'
  
const FormItem = Form.Item
const Option = Select.Option

const index = props => {
    return(
        <Layout>Welcome</Layout>
    );
};

export default index;