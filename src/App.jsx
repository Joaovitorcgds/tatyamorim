import { Services } from './components/Services';
import { HeroArea } from './components/HeroArea';
import { WhoIs } from './components/WhoIs';
import { WhatsAppIcon } from './components/WhatsAppIcon';
import { Course } from './components/Course';

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
    </>
  );
}

export default App;
