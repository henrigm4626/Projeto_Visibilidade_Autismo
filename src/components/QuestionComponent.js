import React, { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

const QuestionComponent = ({
  question,
  options,
  onOptionSelect,
  questionIndex,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onOptionSelect(questionIndex, selectedValue);
  };

  return (
    <div className="question-component w-full mt-16">
      <FormControl component="fieldset" fullWidth>
        <FormLabel>
          <h2  className="text-lg font-bold text-left text-[#2E3233] mb-6">{question}</h2>
        </FormLabel>
        <RadioGroup
          aria-label={`question-${questionIndex}`}
          name={`question-${questionIndex}`}
          value={selectedOption}
          onChange={handleOptionChange}
          row
          className="w-full justify-space-between"
        >
          {options.map((caption, index) => (
            <FormControlLabel
              className="w-1/6"
              key={index}
              value={String(index)}
              control={
                <Radio
                  sx={{
                    color: "#582F95",
                    "&.Mui-checked": {
                      color: "#934FF8",
                    },
                  }}
                />
              }
              labelPlacement="bottom"
              label={
                <span className="font-bold text-[#2E3233]">{caption}</span>
              }
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default QuestionComponent;
