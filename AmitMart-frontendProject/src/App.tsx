import { Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop/Shop";
import Blog from "./Pages/Blog/Blog";
import Banner from "./components/layout/Banner";
import Terms from "./Pages/Terms/Terms";
import Error from "./Pages/Error";
import Contactus from "./Pages/Contact/Contactus";
import Home from "./Pages/Home/Home";
import SingleProduct from "./Pages/Shop/SingleProduct";
import Settings from "./Pages/Account/Details/Settings";
import User from "./Pages/Account/Details/User";
import Orders from "./Pages/Account/Details/Orders";
import Account from "./Pages/Account/Account";
import { Provider } from "react-redux";
import { store } from "./reducs/Store/store";
import Faq from "./Pages/FAQ/Faq";
import AboutUs from "./Pages/About/AbouUs";

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen w-full bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-500">
        <div className="flex flex-col items-center justify-center gap-10 py-5">
          <div className="w-full">
            <Banner />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />

            <Route path="/Account" element={<Account />}>
              <Route index element={<User />} />
              <Route path="user" element={<User />} />
              <Route path="orders" element={<Orders />} />
              <Route path="settings" element={<Settings />} />
            </Route>

            <Route path="/terms" element={<Terms />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/shop/:id" element={<SingleProduct />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default App;
