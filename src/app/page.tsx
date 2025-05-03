import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Planner from "../../components/Planner";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-full overflow-hidden">
      <Header/>   
        <main className="flex-1 overflow-hidden">
        <Planner/>
        </main>
      <Footer/>
     </div>
  );
}
