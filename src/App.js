import {Routes, Route} from "react-router-dom";
import PageLayout from "./pages/LayoutPage";
import Dashboard from "./pages/Dashboard";
import CustomerDetail from "./pages/CustomerDetail";
import NewCustomer from "./pages/NewCustomer";
import Average from "./pages/Average";

function App() {
    return (
        <Routes>
            <Route element={<PageLayout/>}>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/customers" element={<Dashboard/>}/>
                <Route path="customers/:customerId" element={<CustomerDetail/>}/>
                <Route path="/new" element={<NewCustomer/>}/>
                <Route path="/average" element={<Average/>}/>
            </Route>
        </Routes>
    );
}

export default App;
