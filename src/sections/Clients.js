import React, { useRef } from "react";
import angle from "clock-angle";

import map from "../data/map.json";

import { theme } from "../../tailwind.config";

/**
 * Constants
 */
const CITIES = [
  ["124.996", "165.002"],
  ["144.994", "225.005"],
  ["184.999", "265"],
  ["204.997", "225.005"],
  ["304.995", "184.999"],
  ["484.995", "145.004"],
  ["544.998", "165.002"],
  ["584.993", "165.002"],
  ["564.995", "204.997"],
  ["624.999", "184.999"],
  ["844.993", "425.002"],
  ["824.996", "325.003"],
  ["844.993", "245.003"],
];

const Clock = ({ hour, minute }) => {
  console.log(angle(new Date().getHours(), null));
  console.log(angle(null, new Date().getMinutes()));

  return (
    <div className="w-8 h-8 rounded-full bg-black relative">
      <span className="block h-2 w-0.5 bottom-1/2 left-1/2 transform -translate-x-1/2 absolute origin-bottom rounded-sm bg-white" />
      <span className="block h-3 w-0.5 bottom-1/2 left-1/2 transform -translate-x-1/2 absolute origin-bottom rounded-sm bg-white" />
    </div>
  );
};

const Clients = () => {
  const refs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  return (
    <section className="bg-gray-50">
      <div className="container max-w-screen-lg mx-auto py-24">
        <h3 className="text-4xl font-semibold whitespace-nowrap relative z-10">Available worldwide</h3>

        <div className="relative">
          <svg viewBox="0 0 1050 490" className="block w-full -mt-10">
            <g fill={theme.extend.colors.gray["500"]}>
              {CITIES.map(([cx, cy], index) => (
                <circle key={index} cx={cx} cy={cy} ref={refs[index]} r="5" />
              ))}
            </g>

            <g fill={theme.extend.colors.gray["200"]}>
              {map.points.map(([cx, cy], index) => (
                <circle key={index} cx={cx} cy={cy} r="5" />
              ))}
            </g>
          </svg>
        </div>
      </div>

      <Clock />
    </section>
  );
};

export default Clients;
