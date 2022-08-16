import { useState, useMemo } from "react";
import "./styles.css";
import { data } from "./data";
import { PersonList } from "./personList";
import { personType } from "./types";

export default function App() {
  const [personList, filteredPersonList] = useState(data);
  const [extraInput, updateExtraInput] = useState();

  function inputBoxChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newList: personType[] = data.filter((person: personType) => {
      return person.first_name
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    return newList;
  }

  const displayNameList = useMemo(() => <PersonList list={personList} />, [
    personList
  ]);

  return (
    <div className="App">
      Enter first name to filter by:{" "}
      <input onChange={(e) => filteredPersonList(inputBoxChange(e))}></input>
      <input onChange={(e) => updateExtraInput(e.target.value)}></input>
      {displayNameList}
    </div>
  );
}
