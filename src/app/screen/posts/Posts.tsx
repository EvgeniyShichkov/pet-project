import React, { FC, useEffect, useState } from "react";
import { Spinner } from "../../common-components/Spinner";
import { CardItem } from "../../common-components/card/CardItem";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Posts.scss";

interface IPostsProps {}

export const Posts: FC<IPostsProps> = (props) => {
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

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="single-posts">
      <Pagination count={10} renderItem={(item) => <PaginationItem slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }} {...item} />} />
      <div className="content-posts">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
      <Pagination count={10} renderItem={(item) => <PaginationItem slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }} {...item} />} />
    </div>
  );
};
