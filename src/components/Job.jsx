import React, { useState } from "react";
import { job } from "../db/job";
import { Link } from "react-router-dom";

const Job = () => {
  const [rowData, setRowdata] = useState(4);

  const slice = job.slice(0, rowData);
  return (
    <div className="jobContainer">
      <h1 className="text-center text-light fw-bold p-5">
        Daftar <span className="text-warning">Lowongan</span>
      </h1>
      <div className="d-flex gap-2 justify-content-center flex-wrap align-items-center py-3">
        {slice.map((item) => {
          return (
            <div
              className="group singleJob p-3 bg-light rounded shadow-lg"
              key={item.id}
            >
              <span className="d-flex justify-content-between align-items-center gap-3">
                <h1 className="fs-5 fw-semibold text-dark">{item.posisi}</h1>
                <span className="d-flex align-items-center text-dark ap-2">
                  {item.waktu}
                  <i className="fa-regular fa-clock ms-1"></i>
                </span>
              </span>
              <h6 className="border-bottom pb-2">{item.kota}</h6>
              <p className=" mt-3">{`Deskripsi : ${item.desc}`}</p>

              <div className="company d-flex align-items-center gap-3">
                <span className="fs-5 py-3 d-block">{item.perusahaan}</span>
              </div>
              <Link to={"/detail"} className="btn btn-warning d-block">
                Lamar
              </Link>
            </div>
          );
        })}
      </div>
      <Link
        to={"/findjobs"}
        className="d-flex justify-content-center py-5 fs-5 fw-bold text-center text-light"
      >
        Tampilkan semua lowongan
      </Link>
    </div>
  );
};

export default Job;
