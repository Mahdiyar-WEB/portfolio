import Link from "next/link";
import React from "react";

const Chip = ({ name, href }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="text-white bg-blue-500 text-xs font-semibold px-4 py-2 rounded-md"
    >
      <span className="whitespace-nowrap">{name}</span>
    </Link>
  );
};

export default Chip;
