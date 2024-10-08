import { ComponentType } from "react";
import "./tabs.css";
import { classnames } from "../utils/classnames";

type Props = {
  tabs: {
    label: string;
    Icon?: ComponentType;
  }[];

  onTabChange: (index: number) => void | Promise<void>;

  /**
   * Current tab selected index
   */
  tabIndex: number;
};

export function Tabs({ tabs, onTabChange, tabIndex }: Props) {
  return (
    <div className="tabs">
      {tabs.map((tab, index) => (
        <div
          key={tab.label}
          className={classnames(
            ["tabs-tab"],
            ["tabs-tab--active", tabIndex === index]
          )}
          onClick={() => onTabChange(index)}
        >
          {tab.Icon && <tab.Icon />}
          <span>{tab.label}</span>
        </div>
      ))}
    </div>
  );
}
