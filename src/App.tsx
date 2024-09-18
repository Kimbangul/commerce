import 'style/style.scss';

import { register } from 'swiper/element/bundle';

import Header from 'components/header/Header';
import MainSlide from 'components/slider/MainSlide';
import Footer from 'components/footer/Footer';

import {
  Best,
  Edition,
  Sale,
  Pick,
  BottomVisual,
  NewArrival,
  Event,
} from 'section';
import GSAPProvider from 'components/provider/gsap/GSAPProvider';

function App() {
  register();
  return (
    <GSAPProvider>
      <div className='App'>
      <Header />
      <main id='contents'>
        <MainSlide />
        <Edition />
        <Best />
        <Event />
        <Sale />
        <NewArrival />
        <Pick />
        <BottomVisual />
      </main>
      <Footer />
    </div>
    </GSAPProvider>
  );
}

export default App;
