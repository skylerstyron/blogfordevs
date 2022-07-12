import Head from 'next/head'
import Layout from '../sections/Layout'


export default function Home() {
  return (
    <>
      <Head>
        <title>Blog for Dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <Layout>
        {/* Hero section */}
        <section>
          {/* Headlines */}
          <div className="space-y-4 max-w-4xl mx-auto text-center">
            <h1 className="">
              <span>The blogging platform</span>
              <span>for developers</span>
            </h1>
            <h2>
              Start your developer blog, share ideas, and connect the dev community.
            </h2>
          </div>
          {/* CTA */}
          <button></button>
        </section>
      </Layout>
    </>
  )
}
