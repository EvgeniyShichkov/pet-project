import React, { FC, useEffect, useState } from "react";
import { Spinner } from "../../common-components/Spinner";

interface IChatProps {}

export const Chat: FC<IChatProps> = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isLoading) {
      timer = setTimeout(() => {
        setIsLoading(!isLoading);
      }, 500);
    }
    return () => clearTimeout(timer);
  }, [isLoading]);

  return <div>{isLoading ? <Spinner /> : <span>Chat</span>}</div>;
};
