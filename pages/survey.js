import React from 'react';
import dynamic from "next/dynamic"

const SurveyComponent = dynamic(() => import("../components/mysurvey"), {
    ssr: false,
  })

const Survey = () => {
    return (
        <div>
      <h3>Page 1</h3>
      <SurveyComponent />
        </div>
    );
}

export default Survey;

