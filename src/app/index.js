import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { HomePage } from "../pages/home";
import { ErrorPage } from "../pages/error";
import { AboutPage } from "../pages/about";
import { theme } from "../shared/constants";
import { GlobalStyles } from "./styles";
import { PortfolioPage } from "../pages/portfolio";
import { ContactsPage } from "../pages/contacts";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "/contacts",
        element: <ContactsPage />,
      },
    ],
    {
      basename: "/miliincode",
    }
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
