import React, { useEffect, useRef } from "react";

export const CustomCursor = () => {
  const mainCursor = useRef(null);
  const secondaryCursor = useRef(null);

  const positionRef = useRef()({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;

      const mouseX = clientX;
      const mouseY = clientY;

      positionRef.current.mouseX =
        mouseX - secondaryCursor.current.clientWidth / 2;
      positionRef.current.mouseY =
        mouseY - secondaryCursor.current.clientHeight / 2;

      mainCursor.current.style.transform = `translate3d(${
        mouseX - mainCursor.current.clientWidth / 2
      }), ${mouseY - mainCursor.current.clientHeight / 2}px,0)`;
    });

    return () => {};
  }, []);

  return (
    <div>
      <div className="main-cursor" ref={mainCursor}></div>;
      <div className="secondary-cursor" ref={secondaryCursor}></div>;
    </div>
  );
};
