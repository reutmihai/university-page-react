import University from './University/University';
import Tutors from './Tutors/Tutors';
import Sidebar from './Sidebar/Sidebar';
import '@fontsource/montserrat';

export default function App() {
  return (
    <div>
      {/* <Sidebar /> */}
      <University />
      <Tutors />
    </div>
  );
}
