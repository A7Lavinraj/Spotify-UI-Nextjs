import Topnav from "@/components/main/Topnav";
import { useState } from "react";

const Main = () => {
  const [message, setmessage] = useState<string>("");

  const date = new Date();
  let current_hour;

  const greet = () => {
    current_hour = date.getHours();

    if (current_hour < 12 && message != "Good Morning") {
      setmessage("Good Morning");
    } else if (
      current_hour >= 12 &&
      current_hour < 16 &&
      message != "Good Afternoon"
    ) {
      setmessage("Good Afternoon");
    } else if (
      current_hour >= 16 &&
      current_hour < 20 &&
      message != "Good Evening"
    ) {
      setmessage("Good Evening");
    } else if (
      current_hour >= 20 &&
      current_hour < 24 &&
      message != "Good Night"
    ) {
      setmessage("Good Night");
    }
  };

  greet();

  return (
    <main className="ml-[15rem]">
      <Topnav name="__Levo" />
      <h2 className="text-white text-3xl font-bold mx-8 my-4">{message}</h2>
    </main>
  );
};

export default Main;
