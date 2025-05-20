import PlayOn from "../PlayOn/PlayOn"


export default function Progress() {
    return (
        <div className="items-center flex px-40 py-12 text-white justify-between gap-8 relative z-10 ">

            <PlayOn />
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-800 ">
                <div className="bg-white h-2.5 rounded-full" style={{ width: "45%" }}></div>
                <span className="text-3xl font-semibold  text-blue-700 dark:text-white">02:57</span>
            </div>
        </div>

    )
}