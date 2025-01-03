import { Services } from './components/Services';
// import { Header } from './components/Header';
import { HeroArea } from './components/HeroArea';
import { WhoIs } from './components/WhoIs';
import { WhatsAppIcon } from './components/WhatsAppIcon';

function App() {
  return (
    <>
      <div className='relative'>
        <WhatsAppIcon/>
      </div>
      <HeroArea/>
      <Services/>
      <WhoIs/>
    </>
  );
}

export default App;
