
import Settingbar from "./components/setting/settingbar";
import Topbar from "./components/navbar/Topbar";
import Sidebar from "./components/navbar/Sidebar";
import CategoryBar from "./components/navbar/CategoryBar";
import CategorySideBar from "./components/navbar/CategorySideBar";
import Dua from "./components/dua/Dua";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home({ searchParams }) {
  // console.log(searchParams);
  return (
    <main className="flex bg-[#F7F8FA] lg:bg-white px-6 pt-6 lg:px-0 lg:pt-0">
      {/* sidebar  */}
      <Sidebar />

      <div className="w-full text-black overflow-y-hidden">
        {/* Topbar  */}
        <Topbar />
        <CategoryBar />
        <div className="grid grid-cols-[1fr] md:grid-cols-[350px_1fr] xl:grid-cols-[350px_1fr_335px] gap-4 md:gap-6 overflow-hidden rounded-tl-none lg:rounded-tl-2xl pt-0 lg:pt-24 xl:pt-6 lg:px-6 bg-[#F7F8FA] mb-14 lg:mb-auto">
          {/* category section  */}
          <CategorySideBar />

          {/* duas  */}

          <Suspense fallback={<Loading />}>
            <Dua catId={searchParams.cat_id} />
          </Suspense>

          {/* setting  */}
          <Settingbar />
        </div>
      </div>
    </main>
  );
}
