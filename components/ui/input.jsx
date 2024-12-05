import * as React from "react";

import { cn } from "@/lib/utils";
import { NumericFormat, PatternFormat } from "react-number-format";

const numberMappings = {
  "١": "1",
  "٢": "2",
  "٣": "3",
  "٤": "4",
  "٥": "5",
  "٦": "6",
  "٧": "7",
  "٨": "8",
  "٩": "9",
  "٠": "0",
  "۱": "1",
  "۲": "2",
  "۳": "3",
  "۴": "4",
  "۵": "5",
  "۶": "6",
  "۷": "7",
  "۸": "8",
  "۹": "9",
  "۰": "0",
};

const CustomInput = ({ className, type, propRef, error, ...props }) => {
  return (
    <>
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={propRef}
        {...props}
      />
      {error && <p className="text-red-500 text-xs mt-0.5">{error}</p>}
    </>
  );
};

const Input = React.forwardRef(({ className, type, prefix, format = "", error, ...props }, ref) => {
  const handleKeyDown = (event) => {
    if (numberMappings[event.key]) {
      const englishDigit = numberMappings[event.key];
      event.target.value = event.target.value + englishDigit;
    }
  };

  if (type === "number" || type === "money")
    return (
      <>
        <NumericFormat
          className={className}
          customInput={CustomInput}
          prefix={prefix}
          propRef={ref}
          onKeyDown={handleKeyDown}
          {...(type === "money" && { thousandSeparator: ",", allowNegative: false })}
          {...props}
        />
        {error && <p className="text-red-500 text-xs mt-0.5">{error}</p>}
      </>
    );
  else if (type === "pattern_number")
    return (
      <>
        <PatternFormat
          format={format}
          allowEmptyFormatting
          className={className}
          customInput={CustomInput}
          propRef={ref}
          onKeyDown={handleKeyDown}
          {...props}
        />
        {error && <p className="text-red-500 text-xs mt-0.5">{error}</p>}
      </>
    );

  return <CustomInput className={className} type={type} propRef={ref} error={error} {...props} />;
});
Input.displayName = "Input";

export { Input };
