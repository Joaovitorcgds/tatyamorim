import { Services } from './components/Services';
// import { Header } from './components/Header';
import { HeroArea } from './components/HeroArea';
import { WhoIs } from './components/WhoIs';
import { WhatsAppIcon } from './components/WhatsAppIcon';
import { RentSpace } from './components/RentSpace';

function App() {
  return (
    <>
      <div className='relative'>
        <WhatsAppIcon/>
      </div>
      <HeroArea/>
      <Services/>
      <WhoIs/>
      <RentSpace/>
    </>
  );
}

export default App;
