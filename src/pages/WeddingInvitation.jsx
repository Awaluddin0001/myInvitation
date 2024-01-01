import { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Wrapper from "../module/Wrapper";
import OrangMenikah from "./OrangMenikah";
import Schedule1 from "./Schedule1";
import TurutMengundang1 from "./TurutMengundang1";
import Schedule2 from "./Schedule2";
import TurutMengundang2 from "./TurutMengundang2";
import Transfer from "./Transfer";

const pages = [
  OrangMenikah,
  Schedule1,
  TurutMengundang1,
  Schedule2,
  TurutMengundang2,
  Transfer,
];

export default function WeddingInvitation() {
  const { name } = useParams();
  const [onText1, setonText1] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const containerRef = useRef(null);
  const [canChangePage, setCanChangePage] = useState(true);

  const handleScroll = (event) => {
    const container = containerRef.current;
    const scrollDirection = getScrollDirection(container, event);

    if (scrollDirection === "down" && canChangePage) {
      setCurrentPage((prevPage) => Math.min(pages.length - 1, prevPage + 1));
      setCanChangePage(false);
    } else if (scrollDirection === "up" && canChangePage) {
      setCurrentPage((prevPage) => Math.max(0, prevPage - 1));
      setCanChangePage(false);
    }
  };

  const handleTouchEnd = () => {
    setCanChangePage(true);
  };

  useEffect(() => {
    const container = containerRef.current;

    container.addEventListener("wheel", handleScroll);
    container.addEventListener("touchmove", handleScroll);
    container.addEventListener("touchend", handleTouchEnd);

    return () => {
      container.removeEventListener("wheel", handleScroll);
      container.removeEventListener("touchmove", handleScroll);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [canChangePage]);

  const getScrollDirection = (container, event) => {
    const delta =
      event.deltaY ||
      (event.touches &&
        (event.touches[0].clientX - (container.lastTouchX || 0) ||
          event.touches[0].clientY - (container.lastTouchY || 0)));

    container.lastTouchX = (event.touches && event.touches[0].clientX) || 0;
    container.lastTouchY = (event.touches && event.touches[0].clientY) || 0;

    if (delta > 0) return "down";
    if (delta < 0) return "up";
    if (event.touches && Math.abs(delta) > 5) {
      return delta > 0 ? "right" : "left";
    }

    return "none";
  };

  return (
    <Wrapper name={name} transText1={setonText1}>
      <div ref={containerRef} className="scroll-container">
        {pages.map((Page, index) => {
          if (index == 0) {
            return (
              <div
                key={index}
                className={`page ${currentPage === index ? "active" : ""}`}
                style={{ display: currentPage === index ? "block" : "none" }}
              >
                <Page transText={onText1} />
              </div>
            );
          }
          return (
            <div
              key={index}
              className={`page ${currentPage === index ? "active" : ""}`}
              style={{ display: currentPage === index ? "block" : "none" }}
            >
              <Page />
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}
