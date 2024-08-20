import {
  ComponentType,
  CSSProperties,
  useEffect,
  useRef,
  useState,
} from "react";
import { attributes } from "../../utils/attributes";
import "./toast.css";
import { X } from "lucide-react";
import React from "react";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

interface CustomStyleCSS extends CSSProperties {
  "--codex-toast-background"?: string;
  "--codex-toast-border-color"?: string;
  "--codex-border-radius"?: string;
  "--codex-toast-color"?: string;
}

type Props = {
  message: string;

  /**
   * Time is the beginning time of the toast.
   * The toast will be closed after time + duration.
   * Every time a toast should be displayed a new time
   * shoukd be set.
   */
  time: number;

  /**
   * Toast duration in msec
   * Default: 3000
   */
  duration?: number;

  /**
   * Icon displayed on the left of the toast
   */
  Icon: ComponentType;

  className?: string;

  /**
   * Apply custom css variables.
   * codex-toast-background
   * codex-toast-border-color
   * codex-border-radius
   * codex-toast-color
   */
  style?: CustomStyleCSS;
};

export function Toast({
  message,
  time,
  Icon,
  style,
  className = "",
  duration = 3000,
}: Props) {
  const [msg, setMsg] = useState(message);
  const timeout = useRef<number | null>(null);

  useEffect(() => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setMsg(message);

    if (message) {
      timeout.current = window.setTimeout(() => setMsg(""), duration);
    }
  }, [message, time]);

  const onClose = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setMsg("");
  };

  return (
    <div
      className={`toast ${className}`}
      {...attributes({ "aria-hidden": time == 0 || msg === "" })}
      style={style}
    >
      <Icon />
      <span>
        <b>Success ! </b>
        <span>{msg}</span>
      </span>

      <ButtonIcon
        onClick={onClose}
        variant="small"
        className="toast-close"
        Icon={() => <X size="1.25rem" />}
      ></ButtonIcon>
    </div>
  );
}
