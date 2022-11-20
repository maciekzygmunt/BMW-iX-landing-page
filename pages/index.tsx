import Head from 'next/head';
import Image from 'next/image';
import { Layout } from '../components';
import { FirstSection } from '../modules/first-section';
import { Form } from '../modules/form/Form';
import { SecondSection } from '../modules/second-section';

export default function Home() {
  return (
    <Layout>
      <>
        <FirstSection />
        <SecondSection />
        <Form />
      </>
    </Layout>
  );
}
