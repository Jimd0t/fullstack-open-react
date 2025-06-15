import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./utils/persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setfilter] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const MESSAGE_TIMEOUT = 3000;

  useEffect(() => {
    personService.getAll().then((persons) => {
      setPersons(persons);
    });
  }, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const displayError = (error) => {
    setErrorMessage(error);
    setTimeout(() => {
      setErrorMessage(null);
    }, MESSAGE_TIMEOUT);
  };

  const displaySuccessMsg = (msg) => {
    setSuccessMessage(msg);
    setTimeout(() => {
      setSuccessMessage(null);
    }, MESSAGE_TIMEOUT);
  };

  const updatePerson = (foundPerson) => {
    if (
      confirm(
        `${foundPerson.name} is already added to phonebook, replace the old number with a new one?`
      )
    ) {
      let updatedUser = { ...foundPerson, number: newNumber };

      personService
        .update(updatedUser.id, updatedUser)
        .then((response) => {
          // setPersons(persons.map((p) => (p.id === response.id ? response : p)));
          displaySuccessMsg(`Updated ${response.name}'s number`);
        })
        .catch((error) => {
          displayError(error);
        });
    }
  };

  const handleAddButton = (event) => {
    event.preventDefault();
    let foundPerson = persons.find((person) => person.name === newName.trim());
    if (foundPerson) {
      updatePerson(foundPerson);
    } else {
      addPerson();
    }
  };

  const addPerson = () => {
    let person = { name: newName.trim(), number: newNumber };
    personService
      .create(person)
      .then((response) => {
        setPersons(persons.concat(response));
        displaySuccessMsg(`Added ${response.name}`);
        setNewName("");
        setNewNumber("");
      })
      .catch((error) => {
        displayError(error);
      });
  };

  const handleDelete = (id) => {
    let person = persons.find((p) => p.id === id);
    if (confirm(`Do you want to delete ${person.name}`)) {
      personService.deleteObject(person.id).then((respose) => {
        let personsFiltered = persons.filter((p) => p.id !== id);
        setPersons(personsFiltered);
      });
    }
  };
  const handleFilterChange = (event) => setfilter(event.target.value);

  const personsToShow =
    filter === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification className="error" message={errorMessage}></Notification>
      <Notification className="success" message={successMessage}></Notification>
      <Filter onChange={handleFilterChange}></Filter>
      <h2>Add contact</h2>
      <PersonForm
        onSubmit={handleAddButton}
        handleNameInput={handleNameChange}
        handleNumberInput={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
      ></PersonForm>
      <h2>Numbers</h2>
      <Persons
        handleDelete={handleDelete}
        personsToShow={personsToShow}
      ></Persons>
    </div>
  );
};

export default App;
