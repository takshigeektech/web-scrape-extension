import React, { useEffect, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { fetchProductList } from "./api/apis";
import { getChromeStorage, setChromeStorage } from "./utils";

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    chrome.storage.onChanged.addListener(function (changes, namespace) {
      for (let key in changes) {
        if (key === "curStep") {
          setCurrentStep(changes[key]?.newValue);
        }
      }
    });
  }, []);

  useEffect(() => {
    getChromeStorage(["curStep, webCookies"], ({ curStep, webCookies }) => {
      if (curStep) {
        setCurrentStep(curStep);
      } else {
        setChromeStorage("curStep", 0);
      }
    });
  }, []);

  return (
    <div
      id="main-root"
      className="bg-gray-50 flex justify-center items-center m-0 p-[20px] w-[400px]"
    >
      <div className="h-fit flex items-center bg-white shadow-[0_8px_20px_rgba(0,0,0,0.1)] text-center w-full min-w-[300px] p-[30px] rounded-xl">
        <Step1
          className={currentStep === 0 ? "flex" : "hidden"}
          onUpdateSheetClick={() => {
            setCurrentStep(1);
            setChromeStorage("curStep", 1);
            fetchProductList();
          }}
        />
        <Step2 className={currentStep === 1 ? "flex" : "hidden"} />
      </div>
    </div>
  );
};

export default App;
