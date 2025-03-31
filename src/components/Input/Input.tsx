import {
  ChangeEvent,
  ComponentType,
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useState,
} from "react";
import { attributes } from "../utils/attributes";
import { classnames } from "../utils/classnames";
import "./input.css";

type Props = {
  id: string;

  label?: string;

  /**
   * Helper text to add indication about your input.
   */
  helper?: string;

  /**
   * Add an icon on the left.
   */
  Icon?: ComponentType;

  /**
   * If the mode is "auto", the component will check the invalid state
   * on change and add an invalid state if it is invalid.
   */
  mode?: "auto" | "manual";

  isInvalid?: boolean;

  /**
   * Apply a class to the input element
   */
  inputClassName?: string;

  inputContainerClassName?: string;

  variant?: "big" | "medium";
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      id,
      label,
      helper,
      style,
      Icon,
      inputClassName,
      variant = "big",
      inputContainerClassName = "",
      disabled = false,
      onChange,
      mode,
      isInvalid = false,
      value,
      ...rest
    },
    ref
  ) => {
    const [invalid, setInvalid] = useState(isInvalid);

    useEffect(() => {
      if (mode === "manual") {
        setInvalid(isInvalid);
      }
    }, [mode, isInvalid]);

    const onInternalChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (mode === "auto") {
        setInvalid(e.currentTarget.checkValidity() !== true);
      }

      onChange?.(e);
    };

    return (
      <div
        className={classnames(
          ["input"],
          ["input--invalid", invalid || isInvalid],
          ["input--icon", !!Icon],
          ["input--" + variant],
          [inputClassName || ""]
        )}
      >
        {label && <label htmlFor={id}>{label}</label>}

        <div className={classnames([inputContainerClassName])}>
          {Icon && (
            <div>
              <Icon />
            </div>
          )}
          <input
            id={id}
            ref={ref}
            className={classnames([inputClassName || ""])}
            onChange={onInternalChange}
            style={style}
            {...attributes({
              disabled,
              "aria-disabled": disabled,
              "aria-invalid": invalid || isInvalid,
            })}
            {...rest}
            value={value || ""}
          />
        </div>

        {helper && <small>{helper}</small>}
      </div>
    );
  }
);
