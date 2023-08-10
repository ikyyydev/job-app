import React from "react";
import "./detail.css";

export const DetailJob = () => {
  return (
    <div>
      <section className="detail-job" id="detail-job">
        <div className="container-fluid wrapper d-flex justify-content-center py-2">
          <div className="wrapper-detail col-sm-10 shadow">
            <span className="d-flex justify-content-between align-items-center gap-3">
              <h1 className=" fw-semibold text-dark">Web Developer</h1>
              <span className="d-flex align-items-center text-dark ap-2">
                8j
                <i class="fa-regular fa-clock ms-1"></i>
              </span>
            </span>
            <h6 className="border-bottom pb-1">Jakarta</h6>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              animi, dolorem, sint repudiandae aliquid reiciendis sapiente
              blanditiis modi obcaecati culpa, aut magnam eaque quasi explicabo
              suscipit. Hic numquam id molestiae magni laboriosam consectetur
              dicta quae reprehenderit, odio, natus debitis recusandae ducimus
              illo ex cum dolorum quas officia? Ullam nam harum quae sequi quam,
              inventore iure? Deserunt quod molestias aliquid possimus repellat
              perspiciatis explicabo? Provident veniam voluptatum rerum
              excepturi repellat rem sit vitae qui, aliquid animi vel
              necessitatibus tenetur tempore natus praesentium quasi et harum
              temporibus nulla quos at quibusdam, sequi laudantium facilis? Vero
              fuga architecto voluptates odit iusto inventore odio!
            </p>

            <div className="company d-flex align-items-center gap-3">
              <span className="fs-5 py-3 d-block">Perusahaan</span>
            </div>
            <a href="" className="btn btn-warning d-block">
              Lamar
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
