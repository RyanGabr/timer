import "@/styles/global.css";
import { TimerActions } from "./TimerActions/timer-actions";
import { Navbar } from "./Navbar/navbar";
import { CustomTimer } from "./CustomTimer/custom-timer";
import { Timer } from "./Timer/timer";

export function Screen() {

  return (
    <>
      <Navbar />
      <div className="w-full h-[95vh] flex items-center justify-center bg-black">
        <div className="flex flex-col gap-5 items-center justify-center w-96">
          <Timer />
          <CustomTimer />
          <TimerActions />
        </div>
      </div>
    </>
  );
}
