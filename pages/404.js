import Layout from "../components/Layout";
import Link from "next/link";
import { ExclamationIcon } from "@heroicons/react/outline";

const NotFound = () => (
  <Layout
    pageMeta={{
      title: "This is embarrassing",
    }}
  >
    <section className="flex flex-col justify-center items-center space-y-10 mt-12 sm:mt-24">
      <div className="space-y-4 max-w-4xl mx-auto text-center">
        <div className="inline-flex">
          <ExclamationIcon className="w-20 h-20 flex-shrink-0 justify-center mr-2" />
          <h1 className="text-7xl font-bold">404</h1>
        </div>
        <p className="text-lg sm:text-xl">Looks like we can't find this page.</p>
        <Link href="/">
          <button
            type="button"
            onClick={null}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md border-2 border-blue-600 hover:border-blue-700 text-lg sm:text-xl focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 whitespace-nowrap"
          >
            Back to home
          </button>
        </Link>
        
      </div>
    </section>
  </Layout>
);

export default NotFound;
