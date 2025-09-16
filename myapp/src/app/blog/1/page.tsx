import Layout from "@/components/layout";
import Link from "next/link";
export default function blog() {
    return(
        <Layout>


        <div><h1>BLOG PAGE</h1></div>
         <Link href="/blog/2">Next</Link>
        </Layout>
    );
}