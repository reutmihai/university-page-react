import { BrowserRouter } from 'react-router-dom';
import University from './University/University';
import Tutors from './Tutors/Tutors';
import Sidebar from './Sidebar/Sidebar';
import Cities from './Cities/Cities';
import Faculties from './Faculties/Faculties';


const isProduction = process.env.NODE_ENV === 'production';
export default function App() {
  return (
    <div>
      <BrowserRouter basename={isProduction ? '/university-page-react' : ''}>
        {/* <Sidebar /> */}
        <University />
        <Tutors />
        <Cities />
        <Faculties />
      </BrowserRouter>
    </div>
  );
}
