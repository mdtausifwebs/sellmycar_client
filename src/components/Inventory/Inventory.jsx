import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {
  deleteOne,
  deleteAll,
  SortCompany,
} from "../../redux/action/carsAction";
import Table from "react-bootstrap/Table";
import "./inventory.css";
import data from "../../data/data.json";
import { useSearchParams } from "react-router-dom";
const Inventory = () => {
  const [useparams, setuseparams] = useSearchParams();
  const [selectedcompany, setselectedcompany] = useState();
  const [selectedModel, setselectedModel] = useState();
  const [selectedModelList, setselectedModelList] = useState();
  const dispatch = useDispatch();
  const { cars } = useSelector((state) => state?.ReducerCars);
  useEffect(() => {
    setselectedModelList(data[selectedcompany]);
  }, [selectedcompany]);
  useEffect(() => {
    let model = selectedModelList?.find(
      (item) => item?.model === selectedModel
    );
    setselectedModel(model);
  }, [selectedModel, selectedModelList]);
  const deleteOneHandler = (id) => {
    dispatch(deleteOne(id));
  };
  const deleteAllHandler = (id) => {
    dispatch(deleteAll(id));
  };
  const companyHandler = (para) => {
    // console.log("para", para);
    setselectedcompany(para);
    setuseparams({ company: para });
  };
  const modelHandler = (para) => {
    setuseparams({ model: para });
  };
  const speedHandler = (para) => {
    setuseparams({ speed: para });
  };
  const quantityHandler = (para) => {
    setuseparams({ quantity: para });
  };
  const engineccHandler = (para) => {
    setuseparams({ enginecc: para });
  };
  const gearsHandler = (para) => {
    setuseparams({ numbergears: para });
  };
  useEffect(() => {
    // console.log('useparams', useparams);
    dispatch(SortCompany(useparams));
  }, [useparams, dispatch]);
  useEffect(() => {
    console.log(cars);
  });
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <select name="" onChange={(e) => companyHandler(e.target.value)}>
                {data?.companylist?.map((item, i) => {
                  return (
                    <option key={i} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </th>
            <th>
              <div>
                <select onChange={(e) => modelHandler(e.target.value)}>
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
            </th>
            <th>
              <select
                name=""
                id=""
                onChange={(e) => speedHandler(e.target.value)}
              >
                {cars?.map((item, i) => {
                  return (
                    <option key={i} value={item?.speed}>
                      {item?.speed}
                    </option>
                  );
                })}
              </select>
            </th>
            <th>
              <select
                name=""
                id=""
                onChange={(e) => quantityHandler(e.target.value)}
              >
                {cars?.map((item, i) => {
                  return (
                    <option key={i} value={item?.quantity}>
                      {item?.quantity}
                    </option>
                  );
                })}
              </select>
            </th>
            <th>
              <select
                name=""
                id=""
                onChange={(e) => speedHandler(e.target.value)}
              >
                {cars?.map((item, i) => {
                  return (
                    <option key={i} value={item?.price}>
                      {item?.price}
                    </option>
                  );
                })}
              </select>
            </th>
            <th>
              <select name="" id="">
                {cars?.map((item, i) => {
                  return (
                    <option key={i} value={item?.carage}>
                      {item?.carage}
                    </option>
                  );
                })}
              </select>
            </th>
            <th>
              <select
                name=""
                id=""
                onChange={(e) => engineccHandler(e.target.value)}
              >
                {cars?.map((item, i) => {
                  return (
                    <option key={i} value={item?.enginecc}>
                      {item?.enginecc}
                    </option>
                  );
                })}
              </select>
            </th>
            <th>
                onChange={(e) => gearsHandler(e.target.value)}
              <select name="" id="" >
                {cars?.map((item, i) => {
                  return (
                    <option key={i} value={item?.numbergears}>
                      {item?.numbergears}
                    </option>
                  );
                })}
              </select>
            </th>
            <th>
              <span>total {cars?.length}</span>
            </th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th>company</th>
            <th>model </th>
            <th>speed </th>
            <th>quantity </th>
            <th>price </th>
            <th>car_age </th>
            <th>date </th>
            <th>engine_cc </th>
            <th>number_gears </th>
            <th>delete_one </th>
            <th>delete_all </th>
            <th>edit </th>
          </tr>
        </thead>
        <tbody>
          {cars &&
            cars.map((item, i) => {
              // console.log('item', item);
              return (
                <tr key={i}>
                  <td>{item?.company}</td>
                  <td>{item?.model}</td>
                  <td>{item?.speed}</td>
                  <td>{item?.quantity}</td>
                  <td>{item?.price}</td>
                  <td>{item?.carage}</td>
                  <td>{item?.date}</td>
                  <td>{item?.enginecc}</td>
                  <td>{item?.numbergears}</td>
                  <td onClick={() => deleteOneHandler(item._id)}>
                    <MdDelete />
                  </td>
                  <td onClick={() => deleteAllHandler(item._id)}>
                    <MdDelete />
                  </td>
                  <td>
                    <FaRegEdit />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default Inventory;
