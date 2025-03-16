import { useState } from "react";
import { data, sizeCalculator } from "./data/boarding";
import BoardingItem from "./components/boarding-item";

const Boarding = () => {
  const poidsTotal = 3500;
  const [dataBoarding, setDataBoarding] = useState<BoardingItem[]>(data);
  const [dataVehicle, setDataVehicle] = useState<BoardingItem[]>([]);
  const [selInVehicle, setSelInVehicle] = useState<BoardingItem[]>([]);
  const [selInBoarding, setSelInBoarding] = useState<BoardingItem[]>([]);
  const [sizeVehicle, setSizeVehicle] = useState<number>(0);
  const [selAllBoarding, setSelAllBoarding] = useState(false);
  const [selAllVehicle, setSelAllVehicle] = useState(false);

  const insertInVehicle = (colis: BoardingItem[]) => {
    const newData: BoardingItem[] = [...dataVehicle];
    let oldData: BoardingItem[] = [...dataBoarding];
    colis.forEach((col) => {
      col.select = false;
      newData.push(col);
      oldData = oldData.filter((b) => b.id !== col.id);
    });
    setDataBoarding(oldData);
    setDataVehicle(newData);
    setSizeVehicle(sizeCalculator(newData));
    setSelInBoarding([]);
  };
  const deleteInVehicle = (colis: BoardingItem[]) => {
    const newData: BoardingItem[] = [...dataBoarding];
    let oldData: BoardingItem[] = [...dataVehicle];
    colis.forEach((col) => {
      col.select = false;
      newData.push(col);
      oldData = oldData.filter((b) => b.id !== col.id);
    });
    setDataBoarding(newData);
    setDataVehicle(oldData);
    setSizeVehicle(sizeCalculator(oldData));
    setSelInVehicle([]);
  };
  const onSelectBoarding = (colis: BoardingItem) => {
    if (colis.select) setSelAllBoarding(false);
    colis.select = !colis.select;

    const oldData = [...dataBoarding];
    oldData.map((b) => (b.id === colis.id ? colis : b));
    setDataBoarding(oldData);

    setSelInBoarding((prevState) => [...prevState, colis]);
  };
  const onSelectVehicle = (colis: BoardingItem) => {
    if (colis.select) setSelAllVehicle(false);
    colis.select = !colis.select;

    const oldData = [...dataVehicle];
    oldData.map((b) => (b.id === colis.id ? colis : b));
    setDataVehicle(oldData);

    setSelInVehicle((prevState) => [...prevState, colis]);
  };

  const onSelAllBoarding = () => {
    const oldData = [...dataBoarding];
    oldData.map((b) => (b.select = !selAllBoarding));
    setDataBoarding(oldData);

    setSelInBoarding(selAllBoarding ? [] : oldData);
    setSelAllBoarding((prevState) => !prevState);
  };
  const onSelAllVehicle = () => {
    const oldData = [...dataVehicle];
    oldData.map((b) => (b.select = !selAllVehicle));
    setDataVehicle(oldData);

    setSelInVehicle(selAllVehicle ? [] : oldData);
    setSelAllVehicle((prevState) => !prevState);
  };

  return (
    <div className="p-1 bg-slate-100">
      <h1>Test d'embarquement</h1>
      <span></span>

      <div className="border border-slate-500 p-2 flex gap-2 items-center justify-between h-full">
        <div className="flex flex-col gap-2 items-center w-full h-full">
          <div className="flex justify-between items-center gap-4 w-full">
            <div className="flex gap-2 items-center cursor-pointer"
                onClick={onSelAllBoarding}>
              <span
                className={`icon ${
                  selAllBoarding ? "checkicon-" : "check-emptyicon-"
                }`}
              ></span>
              <span>
                Tout {selAllBoarding ? "deselectionner" : "selectionner"} ({dataBoarding.length} colis)
              </span>
            </div>
            <h1 className="leading-5 font-bold">Colis non embarqués</h1>
          </div>

          <div className="border border-slate-500 p-2 flex flex-wrap gap-2 items-center justify-center w-full h-[87vh] overflow-auto">
            {dataBoarding.map((b, idx) => (
              <BoardingItem
                key={idx}
                onChecked={() => onSelectBoarding(b)}
                {...b}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center w-10">
          <button
            type="button"
            className="border p-1 rounded-sm text-xl"
            onClick={() => insertInVehicle(selInBoarding)}
          >
            &rarr;
          </button>
          <button
            type="button"
            className="border p-1 rounded-sm text-xl"
            onClick={() => deleteInVehicle(selInVehicle)}
          >
            &larr;
          </button>
        </div>
        <div className="flex flex-col gap-2 items-center w-full h-full">
          <div className="flex justify-between items-center gap-4 w-full">
            <div className="flex items-center gap-2 cursor-pointer"
                onClick={onSelAllVehicle}>
              <span
                className={`icon ${
                  selAllVehicle ? "checkicon-" : "check-emptyicon-"
                }`}
              ></span>
              <span>
                Tout {selAllVehicle ? "deselectionner" : "selectionner"} ({dataVehicle.length} colis)
              </span>
            </div>

            <h1 className="leading-5 font-bold">Colis du vehicule</h1>
            <span
              className={`${
                sizeVehicle > poidsTotal
                  ? "text-red-600 font-bold"
                  : "text-blue-600"
              } text-lg`}
            >
              Poids total {sizeVehicle}Kg
            </span>
          </div>
          {sizeVehicle > poidsTotal && (
            <span className="italic leading-3">
              Le poids est superieur au poids du vehicule (Retirer{" "}
              {sizeVehicle - poidsTotal}Kg){" "}
            </span>
          )}
          <div className="border border-slate-500 p-2 flex flex-wrap gap-2 items-center justify-center w-full h-[85vh] overflow-auto">
            {dataVehicle.map((b, idx) => (
              <BoardingItem
                key={idx}
                onChecked={() => onSelectVehicle(b)}
                {...b}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boarding;
