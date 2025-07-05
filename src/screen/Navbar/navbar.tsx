export function Navbar() {
  return (
    <div className="py-2 px-5 border-b border-border flex items-center justify-between bg-foreground/5 sm:px-20">
      <div>
        <div className="font-semibold text-rg sm:text-rg md:text-xl lg:text-rg xl:text-xl">Focus Pomodoro</div>
      </div>
      <div className="flex items-center gap-5">
        <div className="text-xs font-medium invisible sm:invisible md:visible lg:visible xl:visible">Developed by RyanGabr</div>
        <div>
          <button className="text-xs rounded-full font-medium bg-blue-500 px-3 py-1">
            <a href="https://github.com/RyanGabr" target="_blank">GitHub</a>
          </button>
        </div>
      </div>
    </div>
  );
}
