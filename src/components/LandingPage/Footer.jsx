import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer footer-center text-black font-semibold p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - IDSS (Intelligent Distributed Surveillance and Security)
          </p>
        </aside>
      </footer>
    </>
  );
}
