import React, { useEffect, useState } from "react";

function Slides({ slides }) {
  const [slidenum, setSlidenum] = useState(0);
  const [disabledbutton, setDisabledbutton] = useState(false);
  const [disabledbutton2, setDisabledbutton2] = useState(true);

  useEffect(() => {
    if (slidenum === 0) {
      setDisabledbutton(false);
      setDisabledbutton2(true);
    }
    if ((slidenum > 0) & (slidenum < 3)) {
      setDisabledbutton(false);
      setDisabledbutton2(false);
    }
    if (slidenum >= 4) {
      setDisabledbutton(true);
      setDisabledbutton2(false);
    }
  });
  const change = (input) => {
    if (input === 1) {
      setSlidenum(slidenum + 1);
    }
    if (input === 2) {
      setSlidenum(slidenum - 1);
    }
  };
  // const next = () => {
  //   if (slidenum >= 3) {
  //     setDisabledbutton(!disabledbutton);
  //     setSlidenum(slidenum + 1);
  //   }
  //   setSlidenum(slidenum + 1);
  //   console.log(slidenum, "next");
  // };

  // const prev = () => {
  //   if (slidenum <= 0) {
  //     setDisabledbutton2(!disabledbutton2);
  //     setSlidenum(slidenum - 1);
  //   }
  //   setSlidenum(slidenum - 1);
  //   console.log(slidenum, "prev");
  // };

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small"
          id="Restart"
          onClick={() => setSlidenum(0)}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          onClick={() => change(2)}
          id="Prev"
          disabled={disabledbutton2}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          onClick={() => change(1)}
          id="next"
          disabled={disabledbutton}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[slidenum].title}</h1>
        <p data-testid="text">{slides[slidenum].text}</p>
      </div>
    </div>
  );
}

export default Slides;
