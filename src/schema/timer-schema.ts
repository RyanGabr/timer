import { z } from "zod";

export const setCustomTimerSchema = z.object({
  minutes: z.coerce.number().max(59, "Máximo 59 minutos"),
  seconds: z.coerce.number().max(60, "Máximo 60 segundos"),
});
