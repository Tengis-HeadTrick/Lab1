import Navbar from "@/components/Navbar";

export default function Comments({ params }: { params: { id: string } }) {
  return (
    <div>
      <Navbar />
      <h1>Comments for Blog {params.id}</h1>
      <p>Энд тухайн постын сэтгэгдлүүд гарна.</p>
    </div>
  );
}
