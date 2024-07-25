export default function Channels() {
  return (
    <>
      <div className="-z-10 fixed left-0 top-0 bottom-0 block bg-zinc-700 w-72 ml-20 shadow-lg">
        <div className="cursor-default shadow-lg pt-5 pb-5">
          <p className="text-white font-bold ml-7">My Server</p>
        </div>
        <ChannelNames data={main} />
        <ChannelNames data={general} />
        <ChannelNames data={info} />
      </div>
    </>
  );
}

const main = ["home", "introduction", "self-roles", "rules"];
const general = ["general-chat", "english-chat", "off-topic"];
const info = ["suggestion", "feedback", "report"];

function ChannelNames({ data }) {
  return (
    <div className="text-white text-lg p-5 border-b-2 border-zinc-500">
      {data.map((channel, index) => (
        <p
          className="p-2 rounded-md cursor-pointer hover:bg-zinc-600"
          key={index}
        >
          # {channel}
        </p>
      ))}
    </div>
  );
}
