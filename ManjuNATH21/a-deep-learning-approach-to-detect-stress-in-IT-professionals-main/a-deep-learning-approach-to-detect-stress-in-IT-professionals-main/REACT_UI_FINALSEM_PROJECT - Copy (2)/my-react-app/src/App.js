// // // import React from 'react';
// // // import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// // // import StressDetectionWebsite from './StressDetectionWebsite';
// // // import SignUp from './SignUp';

// // // const App = () => {
// // //   return (
// // //     <Router>
// // //       <div>
// // //         <nav>
// // //           <ul>
// // //             <li>
// // //               <Link to="/">Home</Link>
// // //             </li>
// // //             <li>
// // //               <Link to="/signup">Sign Up</Link>
// // //             </li>
// // //           </ul>
// // //         </nav>

// // //         <Routes>
// // //           <Route path="/signup" element={<SignUp />} />
// // //           <Route path="/" element={<StressDetectionWebsite />} />
// // //         </Routes>
// // //       </div>
// // //     </Router>
// // //   );
// // // };

// // // export default App;
// // // App.js

// // import React from 'react';
// // import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// // import StressDetectionWebsite from './StressDetectionWebsite';
// // import SignUp from './SignUp';
// // import SignIn from './SignIn'; // Import the SignIn component
// // import MainPage from './MainPage';
// // import RegisterSuccess from './RegisterSuccess';
// // const App = () => {
// //   return (
// //     <Router>
// //       <div>
// //         <nav>
// //           <ul>
// //             <li>
// //               <Link to="/"></Link>
// //             </li>
// //             <li>
// //               <Link to="/signup"></Link>
// //             </li>
// //             <li>
// //               <Link to="/signin"></Link> {/* Add the Sign In link */}
// //             </li>
// //           </ul>
// //         </nav>

// //         <Routes>
// //           <Route path="/signup" element={<SignUp />} />
// //           <Route path="/signin" element={<SignIn />} /> {/* Route for the SignIn component */}
// //           <Route path="/" element={<StressDetectionWebsite />} />
// //           <Route path="/mainpage" element={<MainPage />} />
// //           <Route path="/RegisterSuccess" element={<RegisterSuccess />} />

// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // };

// // export default App;
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import StressDetectionWebsite from './StressDetectionWebsite';
// import SignUp from './SignUp';
// import SignIn from './SignIn'; // Import the SignIn component
// import MainPage from './MainPage';
// import RegisterSuccess from './RegisterSuccess';
// import MethodSelection from './MethodSelection'; // Import the MethodSelection component

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/signup">Sign Up</Link>
//             </li>
//             <li>
//               <Link to="/signin">Sign In</Link> {/* Add the Sign In link */}
//             </li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/signin" element={<SignIn />} /> {/* Route for the SignIn component */}
//           <Route path="/" element={<StressDetectionWebsite />} />
//           <Route path="/mainpage" element={<MainPage />} />
//           <Route path="/RegisterSuccess" element={<RegisterSuccess />} />
//           <Route path="/methodselection" element={<MethodSelection />} /> {/* Route for the MethodSelection component */}
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import StressDetectionWebsite from './StressDetectionWebsite';
import SignUp from './SignUp';
import SignIn from './SignIn';
import MainPage from './MainPage';
import RegisterSuccess from './RegisterSuccess';
import MethodSelection from './MethodSelection';
import MainPageVideo from './MainPage_video'; 
import MainPage_audio from './MainPage_audio';// Import the MethodSelection component

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/"></Link>
            </li>
            <li>
              <Link to="/signup"></Link>
            </li>
            <li>
              <Link to="/signin"></Link>
            </li>
            <li>
              <Link to="/methodselection"></Link> {/* Add link to MethodSelection */}
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<StressDetectionWebsite />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/registersuccess" element={<RegisterSuccess />} />
          <Route path="/methodselection" element={<MethodSelection />} /> {/* Route for the MethodSelection component */}
          <Route path="/mainpage_video" element={<MainPageVideo/>} />
          <Route path="/mainpage_audio" element={<MainPage_audio />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
