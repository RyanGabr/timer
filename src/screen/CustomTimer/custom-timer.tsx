import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCustomTimerModel } from "./custom-timer-model";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function CustomTimer() {
  const {
    isDialogOpen,
    setIsDialogOpen,
    handleSubmit,
    setCustomTimer,
    register,
  } = useCustomTimerModel();

  return (
    <div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="secondary" className="bg-foreground/5 rounded-full">
            Tempo personalizado
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Escolher tempo personalizado</DialogTitle>
            <DialogDescription>
              Informe os minutos e os segundos
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(setCustomTimer)} className="space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-full space-y-2">
                <Label>Minutos</Label>
                <Input
                  {...register("minutes")}
                  placeholder="00"
                  type="number"
                  className="border-none p-5"
                  max={59}
                />
              </div>
              <div className="w-full space-y-2">
                <Label>Segundos</Label>
                <Input
                  {...register("seconds")}
                  placeholder="00"
                  type="number"
                  className="border-none p-5"
                  max={60}
                />
              </div>
            </div>
            <Button type="submit" className="w-full">Setar tempo</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
