import profile from "./profile.json";

export const SITE_TITLE = profile.displayName;
export const SITE_DESCRIPTION = "컴퓨터네트워크 실습과 Python 프로젝트를 바탕으로 사이버보안을 공부하는 대학생의 포트폴리오입니다.";
export const GITHUB_URL = `https://github.com/${profile.githubUsername}`;

export function sitePath(path = "") {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}`;
}
