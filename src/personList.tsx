import { personType } from "./types";

export const PersonList = (props: { list: Array<personType> }) => {
  return (
    <ul>
      {props.list.map((person: personType) => {
        return (
          <li className="nameList" key={person.id}>
            <span>First Name: </span> {person.first_name} <br />
            <span>Last Name: </span> {person.last_name} <br />
            <span>Email: </span> {person.email}
          </li>
        );
      })}
    </ul>
  );
};
