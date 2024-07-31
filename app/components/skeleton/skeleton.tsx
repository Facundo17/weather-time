import styles from "../../page.module.css";

export default function Skeleton() {
  return (
    <div className="w-full mx-auto px-20">
      <div className="flex space-x-4 my-10">
        <div className="animate-pulse flex-1 space-y-6 py-1">
          <div className="space-y-3">
            <div className="grid grid-cols-5 gap-5">
              <div className="h-[4rem] bg-slate-700 rounded"></div>
              <div className="h-[4rem] bg-slate-700 rounded"></div>
              <div className="h-[4rem] bg-slate-700 rounded"></div>
              <div className="h-[4rem] bg-slate-700 rounded"></div>
              <div className="h-[4rem] bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="animate-pulse h-2 bg-slate-700 py-5 rounded my-5"></div>

      <div className="animate-pulse flex-1 space-y-6 py-1 my-5">
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2 my-5">
            <div className="h-[8rem] bg-slate-700 rounded mr-5"></div>
            <div className="h-[8rem] bg-slate-700 rounded ml-5"></div>
          </div>
          <div className="grid grid-cols-2 gap-2 my-5F">
            <div className="h-[8rem] bg-slate-700 rounded mr-5"></div>
            <div className="h-[8rem] bg-slate-700 rounded ml-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
