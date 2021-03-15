import React, { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import useItemState from "./hooks/useItemState";
import { StatusContext } from "./contexts/StatusContext";
import "./LoadMoreItems.css";

export default function LoadMoreItems() {
  const { getInitItems, getNextItems } = useItemState();
  const status = useContext(StatusContext);

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "-180px",
  });

  useEffect(() => {
    if (inView) {
      if (status === "no-data") getInitItems();
      else if (status === "ready") getNextItems(4);
    }
  }, [inView]);

  let displayStatus;
  switch (status) {
    case "loading":
      displayStatus = <i className="fas fa-spinner rotating"></i>;
      break;
    case "no-data":
      displayStatus = <h4>Scroll down to load items ...</h4>;
      break;
    case "ready":
      displayStatus = <h4>Scroll down to load more items ...</h4>;
      break;
    case "all-loaded":
      displayStatus = <h4>All items displayed</h4>;
      break;
    case "filtered":
      displayStatus = <h4>Displayed first 4 results in that category</h4>;
      break;
    default:
      displayStatus = null;
  }

  return (
    <div className="LoadMoreItems">
      <div className="LoadMoreItems-status">{displayStatus}</div>
      <div ref={ref} className="LoadMoreItems-ref"></div>
    </div>
  );
}
