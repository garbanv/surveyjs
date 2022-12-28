import React,{useCallback,useState} from 'react'
import 'survey-core/defaultV2.min.css';
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

StylesManager.applyTheme("defaultV2");



const surveyJson = {
    "logoPosition": "right",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "text",
        "name": "question1",
        "title": "name of event"
       },
       {
        "type": "checkbox",
        "name": "question2",
        "title": "type of event",
        "choices": [
         "item1",
         "item2"
        ],
        "selectAllText": "a"
       },
       {
        "type": "dropdown",
        "name": "question3",
        "visibleIf": "{question2} = ['item1']",
        "choices": [
         "Item 1",
         "Item 2",
         "Item 3"
        ],
        "autocomplete": "name"
       },
       {
        "type": "radiogroup",
        "name": "question4",
        "choices": [
         "Item 1",
         "Item 2",
         "Item 3"
        ]
       },
       {
        "type": "text",
        "name": "question5",
        "visibleIf": "{question4} = 'Item 1'"
       }
      ]
     }
    ]
   }



export default function mysurvey() {

    const [data,setData]=useState({
        satisfaction:"",
        satisfied:"",
        npsscore:"",
        howimprove:"",
        disappointing:""
    })
    const survey = new Model(surveyJson);

    const alertResults = useCallback((sender) => {
        const results = JSON.stringify(sender.data);
        console.log("results",sender.data);
        setData(sender.data)
      }, []);


    survey.onComplete.add(alertResults);

    console.log("data",data)
  return (
    <Survey model={survey} />
  )
}
