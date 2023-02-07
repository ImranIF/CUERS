import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import React from "react";
import Buttoncmp from "./Buttoncmp";
import Inputcmp from "./Inputcmp";

export const Login = () => {
  const options = ["Chairman", "Evaluator", "Chairman of Exam Committee"];
  return (
    <div className="flex h-4/5 w-full justify-center items-center">
      <div className="block h-min rounded-2xl  border bg-slate-50 border-slate-300  p-10 max-w-lg mx-8">
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
			<div className="col-span-2 flex  mb-8">
				<span className="text-2xl font-medium text-cyan-700">User Login</span>
			</div>
          <Inputcmp
            label="Choose role"
            type="select"
            name="role"
            id="role"
            options={options}
          ></Inputcmp>
          <Inputcmp
            label="Enter EvaluatorID"
            type="text"
            name="evaluatorid"
            id="evaluatorid"
            placeholder="e.g. 123"
          ></Inputcmp>
		  <div className="col-span-2">
          <Inputcmp
            label="Password"
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
          ></Inputcmp></div>
		  <div className="mt-4">
          <Buttoncmp name="Login" variant="stp" size="min">
            <ArrowRightOnRectangleIcon></ArrowRightOnRectangleIcon>
          </Buttoncmp>
		  </div>
        </div>
      </div>
    </div>
  );
};
