import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Planner from "../../components/Planner";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Header/>   
      <Planner/>
      <Footer/>
     </div>
  );
}
