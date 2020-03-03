import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Layout } from "antd";
import apphistory from "../apphistory";

import Sidebar from "../Component/Common/Navigation/SideBar/sidebar";
import NavBar from "../Component/Common/Navigation/NavBar/navBar";
import Product from "../Component/Product/product";
import AddProduct from "../Component/Product/AddProduct/addProduct";
import ViewProduct from "../Component/Product/ViewProduct/viewProduct";
import UpdateProduct from "../Component/Product/UpdateProduct/updateProduct";
import Article from "../Component/Article/article";
import AddArticle from "../Component/Article/AddArticle/addArticle";
import ViewArticle from "../Component/Article/ViewArticle/viewArticle";
import UpdateArticle from "../Component/Article/UpdateArticle/updateArticle";
import MobilePageApp from "../Component/MobileAppPage/mobileAppPage";
import AddMobilePageApp from "../Component/MobileAppPage/AddMobileAppPage/addMobilePage";
import UpdateMobilePageApp from "../Component/MobileAppPage/UpdateMobileAppPage/updateMobileApp";
import ViewMobilePageApp from "../Component/MobileAppPage/ViewMobileAppPage/viewMobileAppPage";
import CalendarPage from "../Component/CalendarPage/calendar";
import AddCalendarPage from "../Component/CalendarPage/AddCalendarPage/addCalanderPage";
import UpdateCalendarPage from "../Component/CalendarPage/UpdateCalendar/updateCalendar";
import ExternalLink from "../Component/ExternalLink/externalLink";
import AddExternalLink from "../Component/ExternalLink/AddExternalLink/addExternalLink";
import UpdateExternalLink from "../Component/ExternalLink/UpdateExternalLink/updateExternalLink";
import AddSlider from "../Component/Slider/AddSlider/addSlider";
import UpdateSlider from "../Component/Slider/UpdateSlider/updateSlider";
import About from "../Component/About/about";
import AddAbout from "../Component/About/AddAbout/addAbout";
import UpdateAbout from "../Component/About/UpdateAbout/updateAbout";

import Slider from "../Component/Slider/slider";
import Login from "../Component/Login/login";

const { Header, Content } = Layout;

export const PublicRoute = [
  {
    component: Login,
    path: "/"
  }
];

export const PrivateRoute = [
  {
    component: Product,
    path: "/products"
  },
  {
    component: AddProduct,
    path: "/products/add-product"
  },
  {
    component: UpdateProduct,
    path: "/products/update-product/:id"
  },
  {
    component: ViewProduct,
    path: "/products/view-product/:id"
  },

  {
    component: Article,
    path: "/articles"
  },
  {
    component: AddArticle,
    path: "/articles/add-article"
  },
  {
    component: UpdateArticle,
    path: "/articles/update-article/:id"
  },
  {
    component: ViewArticle,
    path: "/articles/view-article/:id"
  },
  {
    component: MobilePageApp,
    path: "/mobile-page-app"
  },
  {
    component: AddMobilePageApp,
    path: "/mobile-page-app/add-mobile-page-app"
  },
  {
    component: UpdateMobilePageApp,
    path: "/mobile-page-app/update-mobile-page-app/:id"
  },
  {
    component: ViewMobilePageApp,
    path: "/mobile-page-app/view-mobile-page-app/:id"
  },
  {
    component: CalendarPage,
    path: "/calendar-page"
  },
  {
    component: AddCalendarPage,
    path: "/calendar-page/add-calendar-page"
  },
  {
    component: UpdateCalendarPage,
    path: "/calendar-page/update-calendar-page/:id"
  },
  {
    component: ExternalLink,
    path: "/external-link"
  },
  {
    component: AddExternalLink,
    path: "/external-link/add-external-link"
  },
  {
    component: UpdateExternalLink,
    path: "/external-link/update-external-link/:id"
  },
  {
    component: Slider,
    path: "/slider"
  },
  {
    component: AddSlider,
    path: "/slider/add-slider"
  },
  {
    component: UpdateSlider,
    path: "/slider/update-slider/:id"
  },
  {
    component: About,
    path: "/about"
  },
  {
    component: AddAbout,
    path: "/about/add-about"
  },
  {
    component: UpdateAbout,
    path: "/about/update-about/:id"
  }
];

function Path() {
  const isAuthenticated = localStorage.getItem("auth");
  return (
    <React.Fragment>
      <Router history={apphistory}>
        <div>
          <Switch>
            {PublicRoute.map(({ path, component: Component, ...rest }) => {
              return (
                <Route
                  key={path}
                  exact
                  path={path}
                  component={Component}
                  {...rest}
                />
              );
            })}
            {PrivateRoute.map(({ path, component: Component }) => {
              return (
                <Route
                  exact
                  key={path}
                  path={path}
                  render={props => {
                    return isAuthenticated ? (
                      <Layout>
                        <Sidebar />
                        <Layout>
                          <NavBar history={apphistory} />
                          <Content style={{ margin: "24px 16px 0" }}>
                            <div
                              style={{
                                padding: 24,
                                background: "#fff",
                                minHeight: 360
                              }}
                            >
                              <Component exact {...props} />
                            </div>
                          </Content>
                        </Layout>
                      </Layout>
                    ) : (
                      <Redirect exact to="/" />
                    );
                  }}
                />
              );
            })}
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default Path;
