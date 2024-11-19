import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Loading from './components/Loading'; // Import your loading component


// Lazy load the components
const Nav = lazy(() => import('./components/Navigation/Nav'));
const Hero = lazy(() => import('./components/Home/Hero'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const Pricing = lazy(() => import('./components/Pricing/Pricing'));
const AboutUs = lazy(() => import('./components/About Us/AboutUs'));
const Contactform = lazy(() => import('./components/Contactform/Contact-form'));
const Bookform = lazy(() => import('./components/Form/Bookform'));
const Admindash = lazy(() => import('./components/Admin/Admindash'));
const Login = lazy(() => import('./components/Authentication/Login'));

// Layouts
const MainLayout = () => (
  <div className="fade-in">
    <Nav/>
    <Hero/>
    <Footer />
  </div>
);

const SecondLayout = () => (
  <div className="fade-in">
    <Nav />
    <Pricing />
    <Footer />
  </div>
);

const ThirdLayout = () => (
  <div className="fade-in">
    <Nav />
    <AboutUs />
    <Footer />
  </div>
);

const FourthLayout = () => (
  <div className="fade-in">
    <Nav />
    <Contactform />
    <Footer />
  </div>
);

const FifthLayout = () => (
  <div className="fade-in">
    <Bookform/>
    <Footer />
  </div>
);
const SixLayout = () => (
  <div className="fade-in">
    <Admindash/>
  </div>
);
const SevenLayout = () => (
  <div className="fade-in">
    <Login/>
    <Footer/>
  </div>
);
function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // To detect route changes

  // Simulate loading for 5 seconds when route changes
  useEffect(() => {
    setLoading(true); // Set loading state to true on route change
    const timer = setTimeout(() => {
      setLoading(false); // After 5 seconds, stop loading
    }, 1300); // 5 seconds delay

    return () => clearTimeout(timer); // Cleanup timeout if the component unmounts
  }, [location]); // Trigger effect on route change

  if (loading) {
    return <Loading />; // Show loading while changing route
  }

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/seclayout" element={<SecondLayout />} />
        <Route path="/thirdlayout" element={<ThirdLayout />} />
        <Route path="/fourthlayout" element={<FourthLayout />} />
        <Route path="/fifthlayout" element={<FifthLayout />} />
        <Route path="/sixlayout" element={<SixLayout />} />
        <Route path="/sevenlayout" element={<SevenLayout />} />
      </Routes>
    </Suspense>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
