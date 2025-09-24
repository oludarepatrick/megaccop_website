import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy, type ComponentType, type LazyExoticComponent } from "react";
import NotFound from "./pages/NotFound";
import Layout from "./Layout";
import LoadingSpinner from "./components/LoadingSpinner";

const Home = lazy(()=> import("./pages/Home"));
const About = lazy(()=> import("./pages/About"));
const Services = lazy(()=> import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const SignUp = lazy(() => import("./pages/SignUp"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));


const suspenseHandler = (Component: LazyExoticComponent<ComponentType>) => (
    <Suspense fallback={<LoadingSpinner/>}>
        <Component/>
        
    </Suspense>
);

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            { index: true, element: suspenseHandler(Home)},
            { path: "about", element: suspenseHandler(About)},
            { path: "services", element: suspenseHandler(Services)},
            { path: "contact", element: suspenseHandler(Contact) },
            { path: "signup", element: suspenseHandler(SignUp) },
            { path: "login", element: suspenseHandler(SignUp) },
            { path: "terms-and-conditions", element: suspenseHandler(TermsAndConditions) },
            { path: "privacy-policy", element: suspenseHandler(PrivacyPolicy) },
        ],
        errorElement: <NotFound/>
        
    },
])
