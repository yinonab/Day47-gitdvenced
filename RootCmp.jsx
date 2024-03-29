import { ContactDetails } from './cmps/ContactDetails.jsx'
import { AppHeader } from './cmps/AppHeader.jsx' 
import {ContactIndex} from './pages/ContactIndex.jsx'
import { store } from './store/store.js'



 const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM
const { Provider } = ReactRedux



export function App() {

    return (
        <Provider store={store}>
            <Router>
                <section className="main-layout app">
                    <AppHeader />
                    <main>
                        <Routes>
                            {/* <Route element={<HomePage />} path="/" />
                            <Route element={<AboutUs />} path="/about" /> */}
                            <Route element={<ContactIndex  />} path="/" />
                            <Route element={<ContactIndex  />} path="/contact" />
                            <Route element={<ContactDetails />} path="/contact/:contactId" />
                        </Routes>
                    </main>
                    {/* <AppFooter /> */}
                </section>
            </Router>
        </Provider>
    )
       
    
}