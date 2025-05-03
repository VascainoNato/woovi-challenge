import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Planner from "../../components/Planner";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header/>   
        <main className="flex-1">
        <Planner/>
        </main>
      <Footer/>
     </div>
  );
}
