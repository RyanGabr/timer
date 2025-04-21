import { useState } from "react";
import { SetCustomTimerSchemaType } from "../../types/timer-type";
import { useTimer } from "@/context/timer-context";
import { useForm } from "react-hook-form";
import { setCustomTimerSchema } from "../../schema/timer-schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const useCustomTimerModel = () => {
  const { setSecondsAmount } = useTimer();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<SetCustomTimerSchemaType>({
    resolver: zodResolver(setCustomTimerSchema),
  });

  const setCustomTimer = (data: SetCustomTimerSchemaType) => {
    setIsDialogOpen(false);

    const customTimer = data.minutes * 60 + data.seconds;
    setSecondsAmount(customTimer);

    reset();
  };

  return {
    isDialogOpen,
    setIsDialogOpen,
    handleSubmit,
    register,
    setCustomTimer,
    errors,
  };
};
