import Layout from "@/components/layout";
import Link from "next/link";
export default function blog() {
    return(
        <Layout>


        <div><h1>BLOG PAGE 2</h1></div>
         <Link href="/blog/3">Next   </Link>
         <Link href="/blog/1">Previous   </Link>
        </Layout>
    );
}