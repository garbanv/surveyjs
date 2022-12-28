import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";

const creatorOptions = {
  showLogicTab: true,
  isAutoSave: true
};

export default function SurveyCreatorWidget() {
  const creator = new SurveyCreator(creatorOptions);

  creator.saveSurveyFunc = (saveNo, callback) => { 
    // If you use localStorage:
    window.localStorage.setItem("survey-json", creator.text);
    callback(saveNo, true);

    // If you use a web service:
  
  };
  return (
    <SurveyCreatorComponent creator={creator} />
  )
}