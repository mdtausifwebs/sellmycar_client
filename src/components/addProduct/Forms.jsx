import React, { useEffect, useState } from "react";
import data from "../../data/data.json";
import { useDispatch } from "react-redux";
import { AddCars } from "../../redux/action/carsAction";
const Forms = () => {
  const dispatch = useDispatch();
  const [selectedcompany, setselectedcompany] = useState();
  const [selectedModel, setselectedModel] = useState();
  const [selectedModelList, setselectedModelList] = useState();
  const [selectedModelDetails, setselectedModelDetails] = useState();
  const [quantity, setquantity] = useState();
  const [carage, setcarage] = useState();
  const [date, setdate] = useState();
  const [speed, setspeed] = useState();
  const [enginecc, setenginecc] = useState();
  const [numbergears, setnumbergears] = useState();
  useEffect(() => {
    setselectedModelList(data[selectedcompany]);
  }, [selectedcompany]);
  useEffect(() => {
    let model = selectedModelList?.find(
      (item) => item?.model === selectedModel
    );
    setselectedModelDetails(model);
  }, [selectedModel, selectedModelList, selectedModelDetails]);
  useEffect(() => {
    let currentdate = new Date().getFullYear();
    setcarage(currentdate - Number(date?.split("-")[0]));
  }, [date]);
  const submitHandler = () => {
    const body = {
      company: selectedcompany,
      model: selectedModelDetails?.model,
      price: selectedModelDetails?.price,
      quantity,
      carage,
      date,
      speed,
      enginecc,
      numbergears,
    };
    console.log(body);
    dispatch(AddCars(body));
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
        }}
      >
        <div>
          <span>company name</span> :
          <select name="" onChange={(e) => setselectedcompany(e.target.value)}>
            {data?.companylist?.map((item, i) => {
              return (
                <option key={i} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <span>model name</span> :
          <select onChange={(e) => setselectedModel(e.target.value)}>
            {selectedcompany &&
              selectedModelList?.map((item, i) => {
                return (
                  <option key={i} value={item?.model}>
                    {item?.model}
                  </option>
                );
              })}
          </select>
        </div>
        <div>
          <span>quantity</span>
          <input type="number" onChange={(e) => setquantity(e.target.value)} />
        </div>
        <div>
          <span>Top Speed</span>
          <input type="number" onChange={(e) => setspeed(e.target.value)} />
        </div>
        <div>
          <span>engine cc</span>
          <input type="number" onChange={(e) => setenginecc(e.target.value)} />
        </div>
        <div>
          <span>number of Gears</span>
          <input
            type="number"
            onChange={(e) => setnumbergears(e.target.value)}
          />
        </div>
        <div>
          <span> booking date</span>
          <input
            type="date"
            name="trip-end"
            min="19-01-01"
            max="2030-12-31"
            onChange={(e) => setdate(e.target.value)}
          />
        </div>
        <div>
          <p>{selectedModelDetails?.price}</p>
        </div>
        <div>
          <button onClick={submitHandler}>submit</button>
        </div>
      </div>
    </div>
  );
};

export default Forms;
