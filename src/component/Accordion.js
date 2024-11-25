import React, { useEffect, useRef, useState } from "react";
import { MapInteractionCSS } from 'react-map-interaction';


import "./Accordion.css";

function Accordion(props) {
  const [active, setActive] = useState(false);
  const content = useRef(null);
  const line = useRef(null);
  const descrline = useRef(null);
  const sourceText = useRef(null);
  const video1 = useRef(null);
  const video2 = useRef(null);
  const foto = useRef(null);
  const sourceVideo = useRef(null);
  const map = useRef(null);
  const titlemap = useRef(null);
  const descrmap = useRef(null);
  const [height, setHeight] = useState("0px");


  useEffect(() => {
    console.log("Height for ", props.title, ": ", height);
  }, [height]);

  function toggleAccordion() {
    setActive(!active);
    setHeight(active ? "0px" : `${content.current.scrollHeight}px`);
  }

  return (
    <div className="accordion__section">

      <div
        className={`accordion ${active ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <p className="accordion__title">{props.title}</p>
        <span style={{ marginLeft: "20px" }}>{active ? "-" : "+"}</span>
      </div>
      <hr style={{ width: '100%', color: 'rgb(114, 114, 114)', opacity: '.2', clear: "both", marginBottom: "5px", height: "1px" }} />


      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className="accordion__content">

        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />

        <div
          ref={sourceText}
          className="accordion__source"
          dangerouslySetInnerHTML={{ __html: props.sourceText }}
        />


        <hr style={{ width: '100%', color: 'black', clear: "both", marginBottom: "5px", height: "6px" }} />

        <div
          ref={descrline}
          className="descrline"
          dangerouslySetInnerHTML={{ __html: props.descrline }}
        />

        <div className="box-line-svg">
          <MapInteractionCSS
            showControls
            scale={5}
            minScale={1}
            maxScale={10}
            className="line__svg"
          >
            <img
              style={{ minHeight: "500px", display: (props.line ? 'block' : 'none') }}
              src={props.line}
              ref={line}
              className="accordion__svg"
              alt=""
            />
          </MapInteractionCSS>
        </div>

        <video
          controls
          type="video/mp4"
          src={props.video1}
          ref={video1}
          style={{ width: "250px", padding: "10px", display: (props.video1 ? 'block' : 'none') }}
          className=" "
        />

        <video
          controls
          type="video/mp4"
          src={props.video2}
          ref={video2}
          style={{ width: "250px", padding: "10px", display: (props.video2 ? 'block' : 'none') }}
          className=" "
        />

        <img
          style={{ width: "400px", display: (props.foto ? 'block' : 'none') }}
          src={props.foto}
          ref={foto}
          className=""
          alt=""
        />

        <div
          ref={sourceVideo}
          className="accordion__source"
          dangerouslySetInnerHTML={{ __html: props.sourceVideo }}
        />

        <hr style={{ width: '100%', color: 'black', clear: "both", marginBottom: "5px", height: "6px" }} />

        <div className="box-map">
          <MapInteractionCSS
            showControls
            scale={5}
            minScale={1}
            maxScale={10}
            className="line__svg_map"
          >
            <img
              style={{ minHeight: "650px", display: (props.map ? 'block' : 'none') }}
              src={props.map}
              ref={map}
              className="accordion__svg"
              alt=""
            />
          </MapInteractionCSS>
        </div>

        <div
          ref={descrmap}
          className="titlemap"
          dangerouslySetInnerHTML={{ __html: props.titlemap }}
        />

        <div
          ref={descrmap}
          className="descrmap"
          dangerouslySetInnerHTML={{ __html: props.descrmap }}
        />


      </div>

    </div>
  );
}

export default Accordion;
