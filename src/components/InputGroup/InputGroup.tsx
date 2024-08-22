import { ChangeEvent, CSSProperties } from "react";
import "./inputGroup.css";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";

export interface CustomStyleCSS extends CSSProperties {
  "--codex-border-radius"?: string;
  "--codex-border-color"?: string;
}

type Props = {
  label: string;

  className?: string;

  /**
   * The group can be an tuple array (select) or a single value
   */
  group: [string, string][] | string;

  /**
   * Input type
   */
  type?: string;

  /**
   * Input value
   */
  value?: string;

  /**
   * Group value if the group is a select
   */
  groupValue?: string;

  /**
   * OnChange event triggered when the input change
   */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;

  /**
   * OnChange event triggered when the group change if the group is a select
   */
  onGroupChange?: (e: ChangeEvent<HTMLSelectElement>) => void;

  onBlur?: () => void;

  onFocus?: () => void;

  onMouseEnter?: () => void;

  onMouseLeave?: () => void;

  id: string;

  step?: string;

  /**
   * Apply custom css variables.
   * --codex-border-radius
   * --codex-border-color
   */
  style?: CustomStyleCSS;
};

export function InputGroup({
  label,
  type = "text",
  style,
  group,
  className,
  onChange,
  onGroupChange,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  id,
  step,
  value = undefined,
  groupValue = "",
}: Props) {
  return (
    <div className={`inputGroup ${className}`} style={style}>
      <div className="inputGroup-container">
        <div className="inputGroup-element">
          <div className="inputGroup-inputContainer">
            <Input
              label={label}
              onChange={onChange}
              className="inputGroup-input"
              id={id}
              type={type}
              value={value}
              step={step}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </div>

          <div>
            {Array.isArray(group) ? (
              <Select
                label=""
                id=""
                onChange={onGroupChange}
                className="inputGroup-select"
                defaultValue={groupValue}
                options={group}
              />
            ) : (
              <div className="inputGroup-unit">{group}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
