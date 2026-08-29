import AppRouter from "./router/AppRouter.jsx";
import LoadingApp from "./components/animation/LoadingApp.jsx";

export default function App() {
  return (
    <>
      <LoadingApp />
      <AppRouter />
    </>
  );
}
