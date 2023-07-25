import { BaseLayout } from "@/components/ui/common/layout";
import Head from "next/head";

export default function AboutPage() {
  return (
    <BaseLayout>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="Learn more about our e-commerce platform for courses powered with Crypto"
        />
      </Head>

      <div className="container mx-auto px-4 pt-16 text-center">
        <h1 className="text-5xl font-bold mb-8">About Us</h1>
        <p className="text-2xl mb-12">
          We are a leading e-commerce platform dedicated to offering quality
          courses across various domains. Our mission is to empower learners by
          providing them with high-quality, accessible, and affordable
          educational resources.
        </p>
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-6">Crypto-Powered</h2>
          <p className="text-xl mb-6">
            In the spirit of innovation and inclusivity, we accept payments in
            various cryptocurrencies. Our platform leverages the power of
            blockchain technology, enabling users from around the world to
            purchase our courses using their favorite crypto assets.
          </p>
          <p className="text-xl">
            This approach not only provides a secure and fast transaction method
            but also breaks the barriers of traditional payment methods. It
            makes our courses more accessible to global learners, regardless of
            their geographic location. It is a revolutionary step toward a truly
            inclusive education system.
          </p>
        </div>
        <p className="text-2xl mt-12">
          Join us today and discover the next generation of e-commerce and
          learning. Where technology and education come together to create a
          better future for all.
        </p>
      </div>
    </BaseLayout>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
