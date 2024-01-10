"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";

import Gallery from "./gallery";
import { User } from "./types/user";

export default function Home() {
  const [users, setUsersList] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }

        const data = await response.json();
        setUsersList(data);
      } catch (error:any) {
        console.error('Error fetching users:', error.message);
      }
    };

    fetchUsers();
  }, []);

  return (
    <main className={styles.main}>
      <Gallery users={users} />
    </main>
  );
}
