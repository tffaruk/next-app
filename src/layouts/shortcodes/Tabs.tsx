"use client";

import { useEffect, useRef } from "react";

function Tabs({ children }: { children: any }) {
  //select tabItems
  const tabItemsRef = useRef<HTMLDivElement>(null);

  //change tab item on click
  const handleChangTab = (event: any, index: number) => {
    const tabLinks = [...event.currentTarget.parentElement.children];
    const items = [...tabItemsRef.current!.children];
    const activeItem = items.find((item) => !item.classList.contains("hidden"));
    const activeTabLink = tabLinks.find((item) =>
      item.classList.contains("active")
    );
    if (activeItem === items[index]) return;
    activeTabLink.classList.remove("active");
    event.currentTarget.classList.add("active");
    if (activeItem) {
      activeItem.classList.add("hidden");
    }
    items[index].classList.remove("hidden");
  };

  //show first tab-item
  useEffect(() => {
    let allItems = [...tabItemsRef.current!.children];
    allItems[0].classList.remove("hidden");
  }, []);

  return (
    <div className="tab">
      <ul className="tab-nav">
        {children.map((item: any, index: number) => (
          <li
            key={index}
            className={`tab-nav-item ${index === 0 && "active"}`}
            onClick={(e) => handleChangTab(e, index)}
          >
            {item.props.name}
          </li>
        ))}
      </ul>
      <div className="tab-content" ref={tabItemsRef}>
        {children}
      </div>
    </div>
  );
}

export default Tabs;
