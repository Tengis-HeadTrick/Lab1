import styles from "./page.module.css";
import Header from "@/components/Header";
import Footer from "@/components/footer";






export default function About() {
 return (

  <div>
 <h1>Миний тухай</h1>
 <p className="mt-4 text-gray-700">
 Би Next.js ашиглаж веб хөгжүүлэлт сурч байна.
 </p>
 <p className="mt-2">Миний хобби: унших, аялах, 
    программчлал.</p>
  </div>

  )
}