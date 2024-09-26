import { attributes } from "../utils/attributes";
import "./menu.css";
import { LogoInverse } from "../Logo/LogoInverse";
import { ComponentType, useEffect } from "react";
import { Backdrop } from "../Backdrop/Backdrop";

export type MenuItemComponentProps = {
  onClick: () => void;
  className: string;
};

export type MenuItem =
  | {
      type: "separator";
    }
  | {
      type: "menu-item";
      Component: ComponentType<MenuItemComponentProps>;
    }
  | {
      type: "menu-title";
      title: string;
    };

type Props = {
  /**
   * If true, the menu will be displayed
   */
  expanded: boolean;

  onClose: () => void;

  onOpen?: () => void;

  /**
   * The menu items to be displayed
   */
  items: MenuItem[];

  className?: string;

  /**
   * The application version
   */
  version?: string;
};

export function Menu({
  expanded,
  onClose,
  onOpen,
  items,
  className = "",
  version = "",
}: Props) {
  useEffect(() => {
    if (expanded && onOpen) {
      onOpen();
    }
  }, [expanded, onOpen]);

  const renderItem = (i: MenuItem, index: number) => {
    switch (i.type) {
      case "separator":
        return <hr className="menu-item-separator" key={index}></hr>;
      case "menu-title":
        return (
          <small className="menu-title" key={i.title}>
            {i.title}
          </small>
        );
      case "menu-item":
        return (
          <i.Component onClick={onClose} className="menu-item" key={index} />
        );
    }
  };

  return (
    <>
      <Backdrop onClose={onClose} open={expanded} />

      <aside
        className={`menu ${className}`}
        {...attributes({ "aria-expanded": expanded })}
      >
        <div className="menu-container">
          <div className="menu-header">
            <LogoInverse width={50} />
            <span className="menu-separator">|</span>
            <span className="menu-name">Codex</span>
            <span className="menu-state">ALPHA {version}</span>
          </div>

          <div className="menu-items">
            {items.map((item, index) => renderItem(item, index))}
          </div>
        </div>
      </aside>
    </>
  );
}
