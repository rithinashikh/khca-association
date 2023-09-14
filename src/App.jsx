import './styles/App.scss'
import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import NetmagicsRoutes from './routes/netmagicsroutes/NetmagicsRoutes'
import RegistrarRoutes from './routes/netmagicsroutes/RegistrarRoutes'
// import AdvocateRoutes from './routes/advocateroutes/AdvocateRoutes'
// import AssociationRoutes from './routes/associationroutes/AssociationRoutes'
// import BlankPage from './pages/RegistrarDashboard/BlankPage'
// import BlankPageId from './pages/AssociationDashboard/BlankPageId'
// import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

const user='netmagicsss'
  return (
    <div className="App">
      {/* <ToastContainer/> */}
  {
    user==='netmagics'?(
      <NetmagicsRoutes/>
    ):(
    //  <AdvocateRoutes/>
    // <BlankPageId/>
    // <AssociationRoutes/>
    <RegistrarRoutes/>
    )
  }
    </div>
  );
}


export default App;
