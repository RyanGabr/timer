import { Pause, Play, RotateCcw } from "lucide-react";
import { useTimerActionsModel } from "./timer-actions-model";

export function TimerActions() {
  const { isTimerActive, restartTimer, startTimer } = useTimerActionsModel();

  return (
    <div className="flex items-center justify-between w-full px-10 sm:px-10 md:px-0 lg:px-0 xl:px-0">
      <button
        onClick={startTimer}
        className={`rounded-full p-4 cursor-pointer transition-all
      ${
        isTimerActive
          ? "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/15"
          : "bg-green-500/10 text-green-500 hover:bg-green-500/15"
      }`}
      >
        {isTimerActive && <Pause size={24} fill="#efb100" />}
        {!isTimerActive && <Play size={24} fill="#00c951" />}
      </button>
      <button
        onClick={restartTimer}
        className="rounded-full bg-foreground/5 text-foreground/60 p-4 cursor-pointer hover:bg-foreground/10 transition-all"
      >
        <RotateCcw size={24} />
      </button>
    </div>
  );
}
