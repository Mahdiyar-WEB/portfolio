const userTheme = localStorage.getItem("theme");
const OSTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
const Html = document.documentElement;
export const isThemeDark = () => {
    return  userTheme === "dark" || (!userTheme && OSTheme && Html.classList.add("dark"));
};
export const switchTheme = () => {
  if (Html.classList.contains("dark")) {
    Html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
  Html.classList.add("dark");
  localStorage.setItem("theme", "dark");
};
