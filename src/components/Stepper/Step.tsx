import { Check } from "lucide-react";
import { useEffect, useRef } from "react";
import { attributes } from "../utils/attributes";
import { classnames } from "../utils/classnames";

type StepProps = {
  /**
   * Step title
   */
  title: string;

  /**
   * Step index
   */
  step: number;

  /**
   * If true, an active css class will be added
   */
  isActive: boolean;

  /**
   * If true, a css class will be added to draw the line between two steps
   */
  isLast: boolean;

  /**
   * If true, a done css class will be added to color the step
   */
  isDone: boolean;

  /**
   * Event triggered when a step number is clicked on
   */
  onClick?: (step: number) => void;
};

export function Step({
  step,
  isActive,
  isLast,
  isDone,
  title,
  onClick,
}: StepProps) {
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
  }, []);

  return (
    <div
      className={classnames(
        ["stepper-step", true],
        ["stepper-step-active", isActive]
      )}
      onClick={() => onClick?.(step)}
      {...attributes({ disabled: !onClick })}
    >
      <div className="stepper-step-info">
        <div
          className={classnames(
            ["stepper-number", true],
            ["stepper-number-active", isActive],
            ["stepper-number-done", isDone]
          )}
        >
          <span className="stepper-numberValue">
            {isDone ? <Check size={"1.25rem"} /> : step + 1}
          </span>
        </div>
      </div>

      {!isLast && (
        <div className="stepper-step-between">
          <div
            className={classnames(
              ["stepper-separator", true],
              ["stepper-separator-done", isDone],
              ["stepper-separator-mounted", mounted.current]
            )}
          ></div>
          <span className={"stepper-text"}>{title}</span>
        </div>
      )}
    </div>
  );
}
