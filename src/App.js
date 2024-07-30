import React, { Suspense, useEffect } from 'react';
import './App.css';
import './css/style.css'
import Routes from './components/routes';
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
// import 'swiper/css/swiper-bundle.min.css';
import 'bootstrap-select';
import 'swiper';
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

function App() {
  // useEffect(() => {
  //   // Load and execute your scripts here
  //   const script1 = document.createElement('script');
  //   script1.src = 'js/custom.js';
  //   document.body.appendChild(script1);

  //   const script2 = document.createElement('script');
  //   script2.src = 'js/deznav-init.js';
  //   document.body.appendChild(script2);
  //   const script3 = document.createElement('script');
  //   script3.src = 'js/styleSwitcher.js';
  //   document.body.appendChild(script3);
  //   const script4 = document.createElement('script');
  //   script4.src = 'js/demo.js';
  //   document.body.appendChild(script4);  
  //   const script5 = document.createElement('script');
  //   script2.src = 'vendor/tagify/dist/tagify.js"';
  //   document.body.appendChild(script5);

  //   // Add other script loading logic as needed

  //   return () => {
  //     // Cleanup code if needed
  //   };
  // }, []); 
  return (
    <>
      <Suspense fallback={loading}>
        <Routes />
      </Suspense>
    </>

  );
}

export default App;
