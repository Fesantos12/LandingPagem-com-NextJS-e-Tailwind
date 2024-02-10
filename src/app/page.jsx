import { Customers } from "./components/Customers";
import { Design } from "./components/Design";
import { Events } from "./components/Events";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Leading } from "./components/Leading";
import { Powerfull } from "./components/Powerfull";
import { Speed } from "./components/Speed";
import { Unlimited } from "./components/Unlimited";


export default function Home() {
  return (
    <div>
      <Header/>
      <Design/>
      <Leading/>
      <Unlimited/>
      <Powerfull/>
      <Customers/>
      <Speed/>
      <Events/>
      <Footer/>
    </div>
  );
}
