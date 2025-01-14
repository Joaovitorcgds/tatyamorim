import { Services } from './components/Services';
import { HeroArea } from './components/HeroArea';
import { WhoIs } from './components/WhoIs';
import { WhatsAppIcon } from './components/WhatsAppIcon';
import { Course } from './components/Course';
import { Salon } from './components/Salon';
import { MyMap } from './components/Maps';
import { Footer } from './components/Footer';

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
      <MyMap/>
      <Footer/>
    </>
  );
}

export default App;