import { DiAndroid, DiBitbucket, DiJava, DiJavascript, DiPython, DiReact } from "react-icons/di";

const Tech = () => {

  return (
    <div className="px-9 space-y-5">
      <h1 className="text-center text-2xl font-extrabold">Technologies I use</h1>

      <div className="grid grid-cols-4 gap-5 justify-items-center  md:grid-cols-3 sm:grid-cols-1">
        <DiPython className="hover:scale-150 hover:fill-pink-800 ease-in duration-75 " color="silver" size={200} />
        <DiJavascript color="orange" size={200} />
        <DiReact color="blue" size={200} />
        <DiJava className="animate-bounce" color="gold" size={200} />
        <DiAndroid color="green" size={200} />
        <DiBitbucket color="red" size={200} />
      </div>


    </div>
  )
}
export default Tech