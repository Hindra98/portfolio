
const BoardingItem = (props: BoardingItem) => {
  const onChecked = () => {
    props?.onChecked();
  }
  // const onChecked = props.onChecked;
  return (
    <div className="p-1 bg-slate-400 cursor-pointer group" onClick={onChecked}>
      <div className="p-2 flex flex-col gap-3 border border-slate-500">
        <div className="checked">
          <input type="checkbox" className="cursor-pointer" name="select" id={props?.id || "0"} checked={props?.select} />
        </div>
        <div className="img object-cover hover:scale-150 transition-all flex items-center justify-center">
          <span className="icon suitcaseicon- text-5xl"></span>
        </div>
        <div className="desc flex flex-col items-center">
          {props?.title && <span className="font-bold underline">{props?.title}</span>}
          {props?.size && <span className="italic">{props?.size}</span>}
          {props?.desc && <span className="leading-3">{props?.desc}</span>}
        </div>
      </div>
    </div>
  );
};

export default BoardingItem;
