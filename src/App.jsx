import { Navbar, Footer, FloatingButton } from './components/layout';
import { Home } from './pages/Home';
import './styles/global.css';
import './styles/variables.css';
import './styles/animations.css';
import './App.css';

function App() {
  const handleNavbarSchedule = () => {
    const appointmentSection = document.getElementById('appointment-modal');
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      <Navbar onScheduleClick={handleNavbarSchedule} />
      <Home />
      <Footer />
      <FloatingButton />
    </div>
  );
}

export default App;
