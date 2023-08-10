import React, { useState } from "react";
import { job } from "../../db/job";

export const Jobs = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <div className="search-container">
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
                <i className="fa-solid fa-xmark"></i>
              </div>
              <button className="col-md-2 btn btn-warning rounded-1">
                Cari
              </button>
            </div>
          </form>

          <div className="secDiv d-flex justify-content-center align-items-center gap-3 flex-wrap">
            <div className="singleSearch d-flex align-items-center mt-3 gap-2">
              <label htmlFor="relevan" className=" text-dark border-0">
                Pendidikan:{" "}
              </label>
              <select
                name=""
                id="relevan"
                className="bg-light rounded px-3 py-1 "
              >
                <option value="">SMP/MTS</option>
                <option value="">SMK/SMA/MA</option>
                <option value="">S1/D3</option>
                <option value="">Pascasarjana</option>
              </select>
            </div>
            <div className="singleSearch d-flex align-items-center gap-2 mt-3">
              <label htmlFor="type" className=" text-dark border-0">
                Type:{" "}
              </label>
              <select name="" id="type" className="bg-light rounded px-3 py-1 ">
                <option value="">Parttime</option>
                <option value="">Fulltime</option>
                <option value="">Kontrak</option>
                <option value="">Magang</option>
                <option value="">Remote</option>
              </select>
            </div>
            <div className="singleSearch d-flex align-items-center gap-2 mt-3">
              <label htmlFor="level" className=" text-dark border-0">
                Level:{" "}
              </label>
              <select
                name=""
                id="level"
                className="bg-light rounded px-3 py-1 "
              >
                <option value="">Junior</option>
                <option value="">Middle</option>
                <option value="">Senior</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="jobContainer" id="jobContainer">
        <h1 className="text-center text-light fw-bold p-5">
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
                  <a href="/detail" className="btn btn-warning">
                    Lamar
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
