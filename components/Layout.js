import Head from 'next/head'
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from 'next/router';


const Layout = ({ children, pageMeta }) => {
    const router = useRouter();

    const meta = {
        title: 'Blog for Devs',
        description: 'The blogging platform for developers. Start your developer blog, share your ideas, and connect with the development community.',
        type: 'website',
        ... pageMeta,
    }

    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
                <link rel="icon" href="/favicon.ico" />
                {/* Open Graph */}
                <meta property="og:url" content={`http://localhost:3000${router.asPath}`} />
                <meta property="og:site_name" content="Blog for Devs" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                {meta.date && (
                    <meta property="article:published_time" content={meta.date} />
                )}
            </Head>

            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex flex-grow justify-center items-center container mx-auto px-4 sm:px-6">{children}</main>
                <Footer />
            </div>
        </>
    );
};

export default Layout;