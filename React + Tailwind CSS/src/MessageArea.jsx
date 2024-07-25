export default function MessageArea() {
  return (
    <>
      <div className="flex items-center bg-zinc-700 fixed right-0 top-0 bottom-0 left-80 -z-20">
        <div className="flex justify-center items-end bottom-0 left-80 right-0 fixed">
          <input
            type="text"
            className="shadow-md bg-zinc-600 p-5 rounded-lg text-white outline-none w-8/12 mb-5"
            placeholder="Write your message here..."
          ></input>
        </div>
      </div>
    </>
  );
}
