import "@/styles/globals.css";
import HeadTag from "@/components/Common/HeadTag";
import Navbar from "@/components/Common/Navbar";
import { Footer } from "@/components/Common/Footer";
import Script from "next/script";
import { useRouter } from "next/router";
import { useState } from "react";
export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [data, setData] = useState({
    skills: [],
    languages: [],
  });

  const fileChangedHandler = (event) => {
    let file = event.target.files[0];
    let reader = new FileReader();

    // console.log(file);

    if (
      file.name.includes(".png") ||
      file.name.includes(".jpg") ||
      file.name.includes(".jpeg")
    ) {
    } else {
      window.alert("File does not support. You must use .png or .jpg ");
      return;
    }
    if (file.size > 40233) {
      window.alert("Please upload a file smaller than 400KB");
      return;
    }

    reader.onload = function (e) {
      setFile(e.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  function submitHandler(e) {
    e.preventDefault();
    // console.log(data);
    localStorage.setItem("data", JSON.stringify(data));
    router.push("/profile");
  }

  function changeHandler(e) {
    // console.log(data);
    if (e.target.name == "skills") {
      // setData();
      setData(() => ({
        ...data,
        skills: [...data.skills, e.target.value],
      }));
    } 
    else if(e.target.name == "languages"){
      setData(() => ({
        ...data,
        languages: [...data.languages, e.target.value],
      }));
    }
    else {
      setData(() => ({
        ...data,
        [e.target.name]: e.target.value,
      }));
    }
  }

  return (
    <>
      {/* <Script src="./js/flowbite.min.js" strategy="beforeInteractive" /> */}
      {/* <Script src="./js/address.js" /> */}
      <HeadTag />
      <Navbar />
      <Component
        {...pageProps}
        fileChangedHandler={fileChangedHandler}
        file={file}
        submitHandler={submitHandler}
        changeHandler={changeHandler}
      />
      {/* <Footer/> */}
    </>
  );
}
