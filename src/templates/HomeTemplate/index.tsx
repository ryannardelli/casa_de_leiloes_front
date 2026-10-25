import { Outlet } from "react-router-dom";
import { Header } from "../../components/ui/layout/Header";
import { CategoryBar } from "../../components/ui/views/CategoryBar";

export default function HomeTemplate() {
  return (
    <>
      <Header />
      <CategoryBar />

      <main className="min-h-screen bg-gray-50">
        <Outlet />
      </main>
    </>
  );
}