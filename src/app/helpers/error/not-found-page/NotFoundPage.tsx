import React, { FC } from "react";
import { NavLink, isRouteErrorResponse, useRouteError } from "react-router-dom";
import "./NotFoundPage.scss";

interface NotFoundPage {}

export const NotFoundPage: FC<NotFoundPage> = () => {
  const error = useRouteError();
  let errorMessage: string = "Error";
  let errorStatus: number | string = "";
  console.log(errorStatus);
  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText || error.data || "An error occurred, but no additional information is available.";
    errorStatus = error.status;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error("Unknown error:", error);
    errorMessage = "Unknown error";
  }

  return (
    <div className="error-page">
      <div className="error-container">
        <h1>Oops!</h1>
        <p>Извините, произошла непредвиденная ошибка.</p>
        {errorStatus && (
          <p>
            Error Status: <strong>{errorStatus}</strong>
          </p>
        )}{" "}
        <p>
          <i>{errorMessage}</i>
        </p>
        <NavLink to={"/"}>Вернуться</NavLink>
      </div>
    </div>
  );
};
