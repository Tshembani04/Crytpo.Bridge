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



//Version controller


// git init
// git remote add origin https://github.com/Tshembani04/Health-app.git
// git add .
// git commit -m "Updates"
// npm run deploy
// git push -u origin master 0.062034