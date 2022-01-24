import {Routes, Route} from "react-router-dom";
import PageLayout from "./pages/LayoutPage";
import React, {Suspense} from "react";
import {Spinner} from "./components/UI/Spinner";

const Dashboard = React.lazy(() => import('./pages/Dashboard'))
const CustomerDetail = React.lazy(() => import('./pages/CustomerDetail'))
const NewCustomer = React.lazy(() => import('./pages/NewCustomer'))
const Average = React.lazy(() => import('./pages/Average'))

function App() {
    return (
        <Suspense fallback={<Spinner/>}>
            <Routes>
                <Route element={<PageLayout/>}>

                    <Route path="/" element={<Dashboard/>}/>
                    <Route path="/customers" element={<Dashboard/>}/>
                    <Route path="customers/:customerId" element={<CustomerDetail/>}/>
                    <Route path="/new" element={<NewCustomer/>}/>
                    <Route path="/average" element={<Average/>}/>
                </Route>
            </Routes>
        </Suspense>
    );
}

export default App;
