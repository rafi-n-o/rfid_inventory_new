import { Provider } from "react-redux";
import { HashRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalApp from "./layouts/GlobalApp";
import MainApp from "./layouts/MainApp";
import Attribute from "./pages/attribute";
import Cart from "./pages/cart";
import Order from "./pages/order";
import Category from "./pages/category";
import Contact from "./pages/contact";
import Dashboard from "./pages/dashboard";
import EpcLog from "./pages/epcLog";
import FormAttribute from "./pages/formAttribute";
import FormCategory from "./pages/formCategory";
import FormProduct from "./pages/formProduct";
import FormWarehouse from "./pages/formWarehouse";
import Home from "./pages/home";
import Item from "./pages/item";
import Login from "./pages/login";
import Mutations from "./pages/mutations";
import MyProfile from "./pages/myProfile";
import Product from "./pages/product";
import ProductStock from "./pages/productStock";
import Register from "./pages/register";
import Transfers from "./pages/transfers";
import UserLog from "./pages/userLog";
import Warehouse from "./pages/warehouse";
import WarehouseDetail from "./pages/warehouseDetail";
import WarehouseStock from "./pages/warehouseStock";
import store from "./redux/store";
import FormApp from "./layouts/FormApp";
import Device from "./pages/device";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <HashRouter>
          <Routes>
            <Route path="*" element={<GlobalApp />}>
              <Route index element={<Home />} />
              <Route path="cart">
                <Route path="service/:category" element={<Cart />} />
              </Route>
              <Route path="device" element={<Device />} />
            </Route>
            <Route path="*" element={<FormApp />}>
              <Route path="order" element={<Order />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
            </Route>

            <Route path="*" element={<MainApp />}>
              <Route path="form-warehouse" element={<FormWarehouse />} />
              <Route path="form-category" element={<FormCategory />} />
              <Route path="form-attribute" element={<FormAttribute />} />
              <Route path="form-product" element={<FormProduct />} />
            </Route>

            <Route path="log" element={<MainApp />}>
              <Route path="user" element={<UserLog />} />
              <Route path="epc" element={<EpcLog />} />
            </Route>

            <Route path="stock" element={<MainApp />}>
              <Route path="warehouses" element={<WarehouseStock />} />
              <Route path="products" element={<ProductStock />} />
            </Route>

            <Route path="dashboard" element={<MainApp />}>
              <Route index element={<Dashboard />} />
            </Route>
            <Route path="my-profile" element={<MainApp />}>
              <Route index element={<MyProfile />} />
            </Route>
            <Route path="warehouses" element={<MainApp />}>
              <Route index element={<Warehouse />} />
              <Route path=":id" element={<WarehouseDetail />} />
            </Route>
            <Route path="categories" element={<MainApp />}>
              <Route index element={<Category />} />
            </Route>
            <Route path="attributes" element={<MainApp />}>
              <Route index element={<Attribute />} />
            </Route>
            <Route path="products" element={<MainApp />}>
              <Route index element={<Product />} />
            </Route>
            <Route path="items" element={<MainApp />}>
              <Route index element={<Item />} />
            </Route>
            <Route path="mutations" element={<MainApp />}>
              <Route index element={<Mutations />} />
            </Route>
            <Route path="transfers" element={<MainApp />}>
              <Route index element={<Transfers />} />
            </Route>
            <Route path="contacts" element={<MainApp />}>
              <Route index element={<Contact />} />
            </Route>
          </Routes>
        </HashRouter>
      </Provider>
    </>
  );
};

export default App;
