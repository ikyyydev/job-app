import React, { useState } from "react";
import { job } from "../../db/job";
import { Link } from "react-router-dom";

export const Jobs = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <div className="search-container">
        <h1 className="text-center fw-bold py-5" style={{ fontSize: "40px" }}>
          Cari pekerjaan impianmu disini
        </h1>
        <div className="seacrhdiv col-md-10 rounded shadow p-5 mx-auto mb-1">
          <form action="">
            <div className="first d-flex justify-content-between align-items-center rounded gap-2 bg-light p-3 shadow-sm flex-wrap ">
              <div className="col d-flex gap-2 align-items-center">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                  type="text"
                  className=" text-dark fw-bold w-100 outline-none  "
                  placeholder="Cari Posisi ..."
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <button className="col-md-2 btn btn-warning rounded-1">
                Cari
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="jobContainer" id="jobContainer">
        <h1 className="text-center text-light fw-bold pb-5">
          Daftar <span className="text-warning">Lowongan</span>
        </h1>
        <div className="d-flex gap-2 justify-content-center flex-wrap align-items-center py-3">
          {job
            .filter((data) => {
              return search.toLocaleLowerCase() === ""
                ? data
                : data.posisi.toLowerCase().includes(search);
            })
            .map((item) => {
              return (
                <div
                  className="group singleJob p-3 bg-light rounded shadow-lg"
                  key={item.id}
                >
                  <span className="d-flex justify-content-between align-items-center gap-3">
                    <h1 className=" fw-semibold text-dark">{item.posisi}</h1>
                    <span className="d-flex align-items-center text-dark ap-2">
                      {item.waktu}
                      <i className="fa-regular fa-clock ms-1"></i>
                    </span>
                  </span>
                  <h6 className="border-bottom pb-1">{item.kota}</h6>
                  <p className="mt-3">{item.desc}</p>

                  <div className="company d-flex align-items-center gap-3">
                    <span className="fs-5 py-3 d-block">{item.perusahaan}</span>
                  </div>
                  <Link to={`/detail/${item.id}`} className="btn btn-warning">
                    Lamar
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
