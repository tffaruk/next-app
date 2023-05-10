"use client";

import { useEffect, useRef } from "react";

function Tabs({ children }: { children: any }) {
  //select tabItems
  const tabItemsRef = useRef<HTMLUListElement>(null);

  //change tab item on click
  const handleChangTab = (event: any, index: number) => {
    const tabLinks = [...event.currentTarget.parentElement.children];
    const items = [...tabItemsRef.current!.children];
    const activeItem = items.find((item) => !item.classList.contains("hidden"));
    const activeTabLink = tabLinks.find((item) =>
      item.classList.contains("active-tab")
    );
    if (activeItem === items[index]) return;
    activeTabLink.classList.remove("active-tab");
    event.currentTarget.classList.add("active-tab");
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
    <div className="relative">
      <ul className="mb-0 flex list-none items-center space-x-4 pl-0">
        {children.map((item: any, index: number) => (
          <li
            key={index}
            className={`m-0 cursor-pointer px-8 py-3 font-bold text-dark dark:text-white ${
              index === 0 && "active-tab"
            }`}
            onClick={(e) => handleChangTab(e, index)}
          >
            {item.props.name}
          </li>
        ))}
      </ul>
      <ul
        className="mb-0 mt-1 list-none bg-theme-light p-6 dark:bg-darkmode-theme-dark"
        ref={tabItemsRef}
      >
        {children}
      </ul>
    </div>
  );
}

export default Tabs;
