import React from "react";

export default function SwitchComponents(
  e: string,
  setTemplate: (arg: boolean) => void,
  setClauses: (arg: boolean) => void,
  setElements: (arg: boolean) => void,
  setUniqueElement: (arg: boolean) => void,
  setUploadImages: (arg: boolean) => void,
  setCloud: (arg: boolean) => void,
  setComments: (arg: boolean) => void,
  setCloudWeather: (arg: boolean) => void
) {
  if (e === "templates") {
    setTemplate(true);
  } else {
    setTemplate(false);
  }

  if (e === "clauses") {
    setClauses(true);
  } else {
    setClauses(false);
  }

  if (e === "elements") {
    setElements(true);
  } else {
    setElements(false);
  }

  if (e === "uniqueElement") {
    setUniqueElement(true);
  } else {
    setUniqueElement(false);
  }

  if (e === "uploadImages") {
    setUploadImages(true);
  } else {
    setUploadImages(false);
  }

  if (e === "cloud") {
    setCloud(true);
  } else {
    setCloud(false);
  }

  if (e === "comments") {
    setComments(true);
  } else {
    setComments(false);
  }

  if (e === "cloudWeather") {
    setCloudWeather(true);
  } else {
    setCloudWeather(false);
  }

  return {
    setTemplate,
    setClauses,
    setElements,
    setUniqueElement,
    setUploadImages,
    setCloud,
    setComments,
    setCloudWeather
  };
}
