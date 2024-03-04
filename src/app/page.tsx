import Stats from "./components/Stats";
import About from "./components/About";
import History from "./components/History";
import OurFabric from "./components/OurFabric";
import Team from "./components/Team";
import Collaboration from "./components/Collaboration";
import WhereBuy from "./components/WhereBuy";
import { Unites } from "./components/Unites";

export default function Home() {
  return (
    <main>
      <About />
      <Stats />
      <History />
      <OurFabric />
      <Team />
      <Collaboration />
      <WhereBuy />
      <Unites />
    </main>
  );
}
