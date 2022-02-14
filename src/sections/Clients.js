import React from "react";

import map from "../data/map.json";
import clients from "../data/clients.json";

import { theme } from "../../tailwind.config";

/**
 * Constants
 */
const CITIES = [
  { name: "Seattle", timezone: "America/Los_Angeles" },
  { name: "San Francisco", timezone: "America/Los_Angeles" },
  { name: "Los Angeles", timezone: "America/Los_Angeles" },
  { name: "New York", timezone: "America/New_York" },
  { name: "London", timezone: "Europe/London" },
  { name: "Paris", timezone: "Europe/Paris" },
  { name: "Berna", timezone: "Europe/Berlin" },
  { name: "Berlin", timezone: "Europe/Berlin" },
  { name: "Timisoara", timezone: "Europe/Bucharest" },
  { name: "Shanghai", timezone: "Asia/Shanghai" },
  { name: "Singapore", timezone: "Asia/Singapore" },
  { name: "Perth", timezone: "Australia/Perth" },
];

const Clock = ({ cx, cy, index }) => {
  const { name } = CITIES[index];

  const style = {
    transform: `translate(${cx}px, ${cy}px)`,
  };

  return (
    <div className="flex items-center absolute" style={style}>
      <span className="bg-black mr-2 w-8 h-8 rounded-full"></span>
      <span className="font-semibold text-lg">{name}</span>
    </div>
  );
};

const Clients = () => {
  return (
    <section className="bg-gray-50">
      <div className="container max-w-screen-lg mx-auto py-24">
        <h3 className="text-4xl font-semibold whitespace-nowrap relative z-10">Available worldwide</h3>

        <div className="relative">
          <svg viewBox="0 0 1050 490" className="block w-full -mt-10">
            {map.points.map(([cx, cy], index) => (
              <circle key={index} cx={cx} cy={cy} fill={theme.extend.colors.gray["200"]} r="5" />
            ))}
          </svg>

          <div className="absolute inset-0">
            {clients.points.map(([cx, cy], index) => (
              <Clock key={index} index={index} cx={cx} cy={cy} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
