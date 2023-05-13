"use client";

function Tab({ children }: { children: React.ReactNode }) {
  return <div className="tab-content-panel hidden">{children}</div>;
}

export default Tab;
