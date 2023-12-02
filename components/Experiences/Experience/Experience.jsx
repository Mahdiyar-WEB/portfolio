import Image from "next/image";
import Link from "next/link";
import React from "react";

const Experience = ({
  title,
  website,
  image,
  from,
  to,
  id,
  jobTitle,
  description,
  imageW,
}) => {
  const calcDate = (date1, date2) => {
    /*
     * calcDate() : Calculates the difference between two dates
     * @date1 : "First Date in the format MM-DD-YYYY"
     * @date2 : "Second Date in the format MM-DD-YYYY"
     * return : Array
     */
    //new date instance
    const dt_date1 = new Date(date1);
    const dt_date2 = new Date(date2);

    //Get the Timestamp
    const date1_time_stamp = dt_date1.getTime();
    const date2_time_stamp = dt_date2.getTime();

    let calc;

    //Check which timestamp is greater
    if (date1_time_stamp > date2_time_stamp) {
      calc = new Date(date1_time_stamp - date2_time_stamp);
    } else {
      calc = new Date(date2_time_stamp - date1_time_stamp);
    }
    //Retrieve the date, month and year
    const calcFormatTmp =
      calc.getDate() + "-" + (calc.getMonth() + 1) + "-" + calc.getFullYear();
    //Convert to an array and store
    const calcFormat = calcFormatTmp.split("-");
    //Subtract each member of our array from the default date
    const days_passed = Number(Math.abs(calcFormat[0]) - 1);
    const months_passed = Number(Math.abs(calcFormat[1]) - 1);
    const years_passed = Number(Math.abs(calcFormat[2]) - 1970);

    //Set up custom text
    const yrsTxt = ["year", "years"];
    const mnthsTxt = ["month", "months"];

    //Convert to days and sum together
    const total_days =
      years_passed * 365 + months_passed * 30.417 + days_passed;

    //display result with custom text
    const result =
      (years_passed == 1
        ? years_passed + " " + yrsTxt[0] + " "
        : years_passed > 1
        ? years_passed + " " + yrsTxt[1] + " "
        : "") +
      (months_passed == 1
        ? months_passed + " " + mnthsTxt[0]
        : months_passed > 1
        ? months_passed + " " + mnthsTxt[1] + " "
        : "");

    //return the result
    return {
      total_days: Math.round(total_days),
      result: result.trim(),
    };
  };
  return (
    <div className="dark:text-white h-full text-slate-600 p-6  rounded-md ring-1 shadow-sm shadow-blue-600 ring-blue-500">
      <div className="flex flex-col gap-4 md:gap-2">
        {website ? (
          <Link
            target="_blank"
            className="text-lg md:text-xl font-semibold break-words"
            href={website}
          >
            {title} - {jobTitle}
          </Link>
        ) : (
          <h4 className=" text-lg md:text-xl font-semibold">
            {title} - {jobTitle}
          </h4>
        )}
        <p className="text-justify break-words ">{description}</p>
        <p className="text-xs font-semibold mt-2 ">
          {from} | {to}
          {to !== "Present" && (
            <span className="ms-1">({calcDate(from, to).result})</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Experience;
