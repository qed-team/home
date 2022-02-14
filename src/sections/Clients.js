import React from "react";
import { utcToZonedTime } from "date-fns-tz";

import map from "../data/map.json";
import clients from "../data/clients.json";

import { theme } from "../../tailwind.config";

/**
 * Constants
 */
const CITIES = [
  { name: "Seattle", offset: "America/Los_Angeles" },
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
  const { name, timezone } = CITIES[index];

  const today = new Date();
  const todayElsewhere = utcToZonedTime(today, timezone);

  console.log(name, today.getHours(), todayElsewhere.getHours(), todayElsewhere.getMinutes());

  const style = {
    transform: `translate(${cx}px, ${cy}px)`,
  };

  return (
    <div className="absolute flex items-center" style={style}>
      <span className="w-8 h-8 mr-2 bg-black rounded-full"></span>
      <span className="text-lg font-semibold">{name}</span>
    </div>
  );
};

const Clients = () => {
  return (
    <section className="bg-gray-50">
      <div className="container max-w-screen-lg py-24 mx-auto">
        <h3 className="relative z-10 text-4xl font-semibold whitespace-nowrap">Available worldwide</h3>

        <div className="relative">
          <svg viewBox="0 0 1050 490" className="block w-full -mt-10">
            {map.points.map(([cx, cy, fill], index) => (
              <circle key={index} cx={cx} cy={cy} fill={theme.extend.colors.gray[fill]} r="5" />
            ))}
          </svg>

          {/* <div className="absolute inset-0">
            {clients.points.map(([cx, cy], index) => (
              <Clock key={index} index={index} cx={cx} cy={cy} />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Clients;
