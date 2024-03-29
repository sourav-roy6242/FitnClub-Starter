import './App.css';
import Hero from './componentes/Hero/Hero';
import Programs from './componentes/Programs/Programs';
import Reasons from './componentes/Reasons/Reasons';
import Plans from './componentes/Plans/Plans';
import Testimonials from './componentes/Testimonials/Testimonials';
import Join from './componentes/Join/Join';
import Footer from './componentes/Footer/Footer';
function App() {
  return (
    <div className="App">
          <Hero/>
          <Programs/>
          <Reasons/>
          <Plans/>
          <Testimonials/>
          <Join/>
          <Footer/>
    </div>
  );
}

export default App;
