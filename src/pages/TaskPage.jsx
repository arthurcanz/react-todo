import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="h-screen w-screen bg-slate-500 center flex flex-col gap-8">
      <div className="flex justify-center relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-0 top-0 bottom-0 text-slate-100 bg-center"
        >
          <ChevronLeftIcon />
        </button>
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Task details
        </h1>
      </div>

      <div className="w-1/2 space-y-4 self-center ">
        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl font-bold text-slate-700">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
