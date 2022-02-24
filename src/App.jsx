import  Navbar from "./components/NavBar";
import  Welcome  from "./components/Welcome";
import  Footer  from "./components/Footer";
import  Services  from "./components/Services";
import  Transactions  from "./components/Transactions";


const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Transactions />
    <Footer />
</div>




);

export default App;