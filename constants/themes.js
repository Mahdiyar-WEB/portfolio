import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { MdDesktopWindows } from "react-icons/md";

const themes = [
  { title: "light", element: <BsSunFill size={18} /> },
  { title: "dark", element: <BsMoonFill size={16} /> },
  { title: "system", element: <MdDesktopWindows size={18} /> },
];

export default themes;
