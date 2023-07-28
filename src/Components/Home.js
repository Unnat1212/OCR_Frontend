import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/reset-password">Reset Password</Link>
      <br />
      <Link to="/reset-code">Reset Code</Link>
      <br />
      <Link to="/new-password">New Password</Link>
      <br />
      <Link to="/setting">Setting</Link>
      <br />
      <Link to="/all-invoice">All Invoices</Link>
    </div>
  );
}

export default Home;
