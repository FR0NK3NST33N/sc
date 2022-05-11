import React, { useCallback } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { MdSearch } from "react-icons/md";
import { components, DropdownIndicatorProps } from "react-select";
import AsyncSelect from "react-select/async";
import { debounce } from "lodash";
import { useAlphaVantage } from "../../services";

export interface AutocompleteProps {
  handleSelect: (value: string) => void;
}

export const Autocomplete = ({ handleSelect }: AutocompleteProps) => {
  const { search } = useAlphaVantage();
  const borderColor = useColorModeValue("gray.800", "white");
  const color = useColorModeValue("gray.800", "white");
  const [selectedValue, setSelectedValue] = useState(null);

  const DropdownIndicator = (props: DropdownIndicatorProps<any, true>) => {
    return (
      <components.DropdownIndicator {...props}>
        <MdSearch />
      </components.DropdownIndicator>
    );
  };

  const customStyles = {
    option: (provided: any) => ({
      ...provided,
      padding: 20,
      color: "#1A202C",
    }),
    control: () => ({
      border: "0.5px",
      borderRadius: "5px",
      borderColor: borderColor,
      borderStyle: "solid",
      minWidth: 250,
      flexGrow: 1,
      display: "flex",
      marginRight: "15px",
    }),
    input: (provided: any) => ({
      ...provided,
      color: color,
    }),
    singleValue: (provided: any, state: any) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
    container: (provided: any) => ({
      ...provided,
      display: "flex",
      flexGrow: 1,
    }),
  };

  const debouncedSearch = useCallback(
    debounce((inputValue, callback) => {
      search(inputValue).then((options) => callback(options));
    }, 500),
    []
  );

  return (
    <AsyncSelect
      value={selectedValue}
      closeMenuOnSelect={true}
      loadOptions={debouncedSearch}
      placeholder={"Search"}
      noOptionsMessage={() => "No Stocks Found"}
      components={{ DropdownIndicator }}
      cacheOptions
      defaultOptions={[]}
      styles={customStyles}
      onChange={(selected: any) => {
        const { value } = selected;
        handleSelect(`${value}`);
        setSelectedValue(null); // clear react-select input value after selection
      }}
      menuPosition={"fixed"}
      menuPortalTarget={document.body}
    />
  );
};
