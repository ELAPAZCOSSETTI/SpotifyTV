import { SkipBack, SkipForward } from "lucide-react";

export default function Player() {
    return (
        <div className=" text-white w-full bg-transparent relative">
         
            <div className="flex space-x-10 px-40 ">
                <SkipBack className="w-20 h-20 cursor-pointer border-4 border-white rounded-b-full rounded-e-full rounded-l-full" />
                <SkipForward className="w-20 h-20 cursor-pointer border-4 border-white rounded-b-full rounded-e-full rounded-l-full" />
            </div>
        </div>
    );
}
