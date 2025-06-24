import Link from "next/link";
import React from "react";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/sobre" target="_blank">
            SOBRE
          </Link>
        </li>
        <li>
          <Link href="/users" target="_blank">
            USERS
          </Link>
        </li>
      </ul>
    </nav>
  );
}
