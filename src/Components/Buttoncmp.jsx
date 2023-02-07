import React from "react";
const buttonstyle = {
  initial:
    "duration-100 py-2 rounded-md shadow-md focus:outline-none focus:ring-offset-1 active:ring-1 ",
  iconInitial: "w-6 h-6",
  simple: {
    primary: {
      default: "text-cyan-900 shadow-none active:ring-cyan-800",
      hover: "hover:bg-cyan-900 hover:text-cyan-100",
      focus: "focus:bg-cyan-900 focus:text-cyan-100",
    },
  },
  standard: {
    primary: {
      icon: "text-cyan-50",
      default: "bg-cyan-900 text-cyan-50 active:bg-cyan-800",
      hover: "hover:bg-cyan-700",
      focus: "focus:ring focus:ring-cyan-900 ",
    },
    secondary: {
      icon: "text-cyan-700 active:bg-cyan-100",
      default: "border-2 border-cyan-700 text-cyan-700",
      hover: "hover:bg-cyan-50",
      focus: "focus:ring focus:ring-cyan-200",
    },
  },
  dangerous: {
    primary: {
      icon: "text-red-50",
      default: "bg-red-900 text-red-50 active:bg-red-800",
      hover: "hover:bg-red-700",
      focus: "focus:ring focus:ring-red-900",
    },
    secondary: {
      icon: "text-red-700",
      default: "border-2 border-red-700 text-red-700 active:bg-red-100",
      hover: "hover:bg-red-50",
      focus: "focus:ring focus:ring-red-100",
    },
  },
};

const Buttoncmp = (prop) => {
  const { name, variant, icon, size } = prop;
  let buttonVariant =
    buttonstyle.initial +
    " " +
    (size && size.localeCompare("full") == 0 ? "w-full" : "w-fit");
  let iconVariant = buttonstyle.iconInitial + " " + (name ? "mr-1" : "");
  if (variant.localeCompare("stp") == 0) {
    iconVariant += " " + buttonstyle.standard.primary.icon;
    buttonVariant +=
      " " +
      buttonstyle.standard.primary.default +
      " " +
      buttonstyle.standard.primary.hover +
      " " +
      buttonstyle.standard.primary.focus;
  } else if (variant.localeCompare("sts") == 0) {
    iconVariant += " " + buttonstyle.standard.secondary.icon;
    buttonVariant +=
      " " +
      buttonstyle.standard.secondary.default +
      " " +
      buttonstyle.standard.secondary.hover +
      " " +
      buttonstyle.standard.secondary.focus;
  } else if (variant.localeCompare("dap") == 0) {
    iconVariant += " " + buttonstyle.dangerous.primary.icon;
    buttonVariant +=
      " " +
      buttonstyle.dangerous.primary.default +
      " " +
      buttonstyle.dangerous.primary.hover +
      " " +
      buttonstyle.dangerous.primary.focus;
  } else if (variant.localeCompare("das") == 0) {
    iconVariant += " " + buttonstyle.dangerous.secondary.icon;
    buttonVariant +=
      " " +
      buttonstyle.dangerous.secondary.default +
      " " +
      buttonstyle.dangerous.secondary.hover +
      " " +
      buttonstyle.dangerous.secondary.focus;
  } else if (variant.localeCompare("sip" == 0)) {
    iconVariant += " " + buttonstyle.simple.primary.icon;
    buttonVariant +=
      " " +
      buttonstyle.simple.primary.default +
      " " +
      buttonstyle.simple.primary.hover +
      " " +
      buttonstyle.simple.primary.focus;
  }
  console.log(buttonVariant);
  return (
    <div>
      <button className={`${buttonVariant}`}>
        <div className="mx-4 flex">
          {prop.children ? (
            <div className={`${iconVariant}`}>{prop.children}</div>
          ) : null}
          <span className="text-md flex text-left">{name}</span>
        </div>
      </button>
    </div>
  );
};

export default Buttoncmp;
