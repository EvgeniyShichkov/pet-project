import { createBrowserRouter } from "react-router-dom";
import { Users } from "./screen/users/Users";
import { StartPage } from "./screen/start-page/StartPage";
import { APP_ROUTER } from "./app-router/app-router";
import { NotFoundPage } from "./helpers/error/not-found-page/NotFoundPage";
import { Layout } from "./layout/Layout";
import { Posts } from "./screen/posts/Posts";
import { Chat } from "./screen/chat/Chat";

export const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: APP_ROUTER.START_PAGE.url,
        element: <StartPage />
      },
      {
        path: APP_ROUTER.USERS.url,
        element: <Users />
      },
      {
        path: APP_ROUTER.POSTS.url,
        element: <Posts />
      },
      {
        path: APP_ROUTER.CHAT.url,
        element: <Chat />
      }
    ]
  }
]);
