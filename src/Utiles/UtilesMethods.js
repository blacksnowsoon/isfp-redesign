// calc the nav offsety to set the margin top
export const setOffsetY = (ele) => {
  let rectBounds = 100;
  if (ele !== null) {
    rectBounds = ele.getBoundingClientRect();
  }
  document.documentElement.style.setProperty(
    "--offset-top",
    rectBounds.height + "px"
  );
};
// return a string lowerCase and replace the spaces
export const lowerCaseReplaceSpace = (string) => {
  return string.toLowerCase().replaceAll(" ", "");
};

// return an encoded Image
export const imgEncoded = (path) => {
  return new URL(path, import.meta.url).href;
};

// checking the preferd-color-scheme is dark
export const preferdSystemColor = window.matchMedia(
  "preferd-color-scheme: dark"
).matches;

// check the user choosed color
export const userPreferdColor = localStorage.getItem("color") || "auto";

// store and change the preferd color scheme
export const themeChoosed = (value) => {
  if (value === "light") {
    document.documentElement.style.setProperty("--theme-moves", "0em");
    convertTheme("light")
  } else if (value === "dark") {
    document.documentElement.style.setProperty("--theme-moves", "4em");
    convertTheme("dark")
  } else {
    document.documentElement.style.setProperty("--theme-moves", "2em");
    convertTheme(preferdSystemColor ? "dark": "light")
  }
  localStorage.setItem("color", value);
};
const convertTheme = (mode)=>{
  if (mode === "light") {
    document.documentElement.style.setProperty("--color", "hsl(0, 0%, 10%)");
    document.documentElement.style.setProperty("--background-color", "hsl(0, 0%, 100%)");
  } else if (mode === "dark") {
    document.documentElement.style.setProperty(
      "--color",
      "hsl(0 ,100% ,100% , var(--transparency-75))"
    );
    document.documentElement.style.setProperty(
      "--background-color",
      " hsl(0, 0%, 14%, var(--transparency-1))"
    );
  }
}