import { useState } from "react";

export default function AdminPage() {
  const [status, setStatus] = useState("");

  const handleReveal = async () => {
    try {
      setStatus("Sending reveal...");
      const res = await fetch(`${process.env.REACT_APP_API_URL}/reveal`, {
        method: "POST",
      });
      const data = await res.json();
      setStatus(data.message || "Revealed successfully");
    } catch (err) {
      setStatus("Failed to contact server");
    }
  };

  return (
    <div className="card-holder">
      <div className="card">
        {/* <h2 className="page-title">Admin Panel</h2>
      <p className="muted">Trigger the reveal for all connected users.</p> */}
        <div style={{ marginTop: 16 }} className="card-internal">
          <h2>Reveal Logo for Everyone</h2>
          <button className="button" onClick={handleReveal}>
            Click Here! 
          </button>
          {status && <div className="status">{status}</div>}
        </div>
      </div>
    </div>
  );
}
