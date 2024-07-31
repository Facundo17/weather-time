import styles from "../../page.module.css";

export default function Skeleton() {
  return (
    <div className="animate-pulse w-full mx-auto px-20">
      <div className="flex space-x-4 my-10">
        <div className="flex-1 space-y-6 py-1">
          <div className="space-y-3">
            <div className="grid grid-cols-5 gap-5">
              <div className="h-[2em] bg-slate-700 rounded"></div>
              <div className="h-[2em] bg-slate-700 rounded"></div>
              <div className="h-[2em] bg-slate-700 rounded"></div>
              <div className="h-[2em] bg-slate-700 rounded"></div>
              <div className="h-[2em] bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="animate-pulse h-2 bg-slate-700 p-2 rounded my-10"></div>

      <div className="animate-pulse flex-1 space-y-6 py-1 my-10">
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2 my-10">
            <div className="h-[6em] bg-slate-700 rounded mr-10"></div>
            <div className="h-[6em] bg-slate-700 rounded"></div>
          </div>
          <div className="grid grid-cols-2 gap-2 my-10">
            <div className="h-[6em] bg-slate-700 rounded mr-10"></div>
            <div className="h-[6em] bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
