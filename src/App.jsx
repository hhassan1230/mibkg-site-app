import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import HomePage from "@/pages/HomePage";
import GamePage from "@/pages/GamePage";
import PrivacyPage from "@/pages/PrivacyPage";
import TermsPage from "@/pages/TermsPage";
import LegalPage from "@/pages/LegalPage";
import NotFoundPage from "@/pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:slug", element: <GamePage /> },
      { path: "privacy", element: <PrivacyPage /> },
      { path: "terms", element: <TermsPage /> },
      { path: "legal", element: <LegalPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
