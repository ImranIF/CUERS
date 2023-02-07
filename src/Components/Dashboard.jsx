import { ArrowLeftOnRectangleIcon, RectangleStackIcon, ClipboardIcon, HashtagIcon } from "@heroicons/react/24/outline";
import React from "react";
import Buttoncmp from "./Buttoncmp";
const menus = [
  {
    person: "chairman",
    activity: ["Form Exam-Committee", "Manage semester info"],
  },
];
const Dashboard = () => {
  return (
    <div className="flex h-screen bg-slate-100">
      <div className="bg-slate-200 h-full w-72 flex-col  px-4 py-4">
        <div className="flex-col">
          {menus.map((person) => {
            let activity = person.activity;
            // console.log(activity);
            return activity.map((temp) => {
              return (
                <div className="mb-3">
                  <Buttoncmp name={temp} variant="sip" size="full">
					<HashtagIcon></HashtagIcon>
				  </Buttoncmp>
                </div>
              );
            });
          })}
        </div>
        <div>
          <Buttoncmp name="Log out" variant="sip" size="full">
            <ArrowLeftOnRectangleIcon></ArrowLeftOnRectangleIcon>
          </Buttoncmp>
        </div>
      </div>
      <div className="">Content</div>
    </div>
  );
};

export default Dashboard;
