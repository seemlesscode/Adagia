import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";
import type { Person } from "../models/people";

export default function TestFirestore() {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "people"));
      const data = querySnapshot.docs.map((doc) => {
        console.log({ doc });

        return {
          id: doc.id,
          ...doc.data(),
        };
      }) as Person[];
      setPeople(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>People</h2>
      <ul>
        {people.map((p) => (
          <li key={p.id}>
            {p.name}, {p.first_name} – {p.specialty_0} ({p.date_of_birth} -
            {p.date_of_death})
          </li>
        ))}
      </ul>
    </div>
  );
}
