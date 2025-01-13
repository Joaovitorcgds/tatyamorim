import { Services } from './components/Services';
import { HeroArea } from './components/HeroArea';
import { WhoIs } from './components/WhoIs';
import { WhatsAppIcon } from './components/WhatsAppIcon';
import { Course } from './components/Course';
import { Salon } from './components/Salon';

function App() {
  return (
    <>
      <div className='relative'>
        <WhatsAppIcon/>
      </div>
      <HeroArea/>
      <Services/>
      <WhoIs/>
      <Course/>
      <Salon/>
    </>
  );
}

export default App;
