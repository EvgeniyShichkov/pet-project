import { commonUrl } from "../helpers/helpers";
import { Sections } from "./section";

export const APP_ROUTER = {
  START_PAGE: {
    url: "/",
    label: "Стартовая страница"
  },
  USERS: {
    url: commonUrl(Sections.Users),
    label: "страница с юзерами"
  },
  POSTS: {
    url: commonUrl(Sections.Posts),
    label: "страница с постами"
  },
  CHAT: {
    url: commonUrl(Sections.CHAT),
    label: "страница с чатом"
  },
  ERROR_404: {
    url: "*",
    label: "Страница не найдена"
  }
} as const;
