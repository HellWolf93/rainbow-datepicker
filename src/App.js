import { Application } from 'react-rainbow-components';
import { Formik } from 'formik';
import logo from './logo.svg';
import './App.css';
import DateInput from './dateInput';

function App() {

  return (
    <Application className="App">
      <Formik initialValues={{ date: new Date() }}>
        <form>
          <DateInput name="date" />
        </form>
      </Formik>
    </Application>
  );
}

export default App;
