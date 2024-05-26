import React, { FC, useEffect, useState } from "react";
import { Table } from "../../common-components/table/Table";
import { Spinner } from "../../common-components/Spinner";

interface IUsersProps {}

export const Users: FC<IUsersProps> = (props) => {
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
  return <div style={{ padding: "80px 40px 40px 40px" }}>{isLoading ? <Spinner /> : <Table />}</div>;
};
