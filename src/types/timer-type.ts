import { z } from "zod";
import { setCustomTimerSchema } from "../schema/timer-schema";

export type SetCustomTimerSchemaType = z.infer<typeof setCustomTimerSchema>;
