import React, { FC, useEffect, useState } from "react";
import { Spinner } from "../../common-components/Spinner";
import { CardItem } from "../../common-components/card/CardItem";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Posts.scss";
import { usePosts } from "../../state-manager/usePosts";

interface IPostsProps {}

export const Posts: FC<IPostsProps> = (props) => {
  const { posts, error, isLoading, fetchPosts } = usePosts();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    fetchPosts();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (error) {
    return <div>Произошла ошибка: {error.message}</div>;
  }

  return (
    <div className="single-posts">
      <Pagination
        count={Math.ceil(posts.length / postsPerPage)}
        page={currentPage}
        onChange={(event, page) => paginate(page)}
        renderItem={(item) => <PaginationItem slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }} {...item} />}
      />
      <div className="content-posts">
        {currentPosts.map((post) => (
          <CardItem post={post} key={post.id} />
        ))}
      </div>
      <Pagination
        count={Math.ceil(posts.length / postsPerPage)}
        page={currentPage}
        onChange={(event, page) => paginate(page)}
        renderItem={(item) => <PaginationItem slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }} {...item} />}
      />
    </div>
  );
};
