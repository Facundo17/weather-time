import styles from "../../page.module.css";

export default function Skeleton() {
  return (
    <div className="w-full mx-auto px-20">
      <div className="animate-pulse h-[8rem] bg-slate-700 py-5 rounded my-8"></div>

      <div className="animate-pulse h-2 bg-slate-700 py-5 rounded my-5"></div>

      <div className="animate-pulse h-[16rem] bg-slate-700 py-5 rounded my-8"></div>
    </div>
  );
}
