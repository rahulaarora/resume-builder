import Education from "@/components/Profile/Education";
import Experience from "@/components/Profile/Experience";
import Sidebar from "@/components/Profile/Sidebar";
import { useEffect, useState } from "react";
const profile = ({file}) => {
  const [data, setData] = useState({});
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("data")));
  }, []);

  return (
    <>
      <main className="flex flex-col md:flex-row m-4 mt-4 content">
        <section className="w-full md:w-1/3 card-shadow-1 px-4 py-8 h-fit">
          <Sidebar data={data} file={file}/>
        </section>
        <section className="w-full md:w-2/3 flex flex-col md:mt-0 mt-4">
          <div className="card-shadow-2 p-4 md:ml-4 mb-4 ">
            <Education data={data}  />
          </div>
          <div className="card-shadow-2 p-4 md:ml-4 mb-4 ">
            <Experience data={data} />
          </div>
        </section>
      </main>
    </>
  );
};

export default profile;