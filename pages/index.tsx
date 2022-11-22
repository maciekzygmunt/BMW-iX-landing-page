import Head from 'next/head';
import { Layout } from '../components';
import { FirstSection } from '../modules/first-section';
import { Footer } from '../components';
import { Form } from '../modules/form/Form';
import { SecondSection } from '../modules/second-section';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nowe BMW iX</title>
      </Head>
      <Layout>
        <>
          <FirstSection />
          <SecondSection />
          <Form />
          <Footer />
        </>
      </Layout>
    </>
  );
}
