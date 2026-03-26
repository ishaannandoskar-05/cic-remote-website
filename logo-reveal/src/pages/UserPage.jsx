import { useEffect, useState } from "react";

export default function UserPage() {
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const fetchReveal = async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/reveal`);
      const data = await res.json();
      setReveal(Boolean(data.reveal));
    };

    fetchReveal();
    const interval = setInterval(fetchReveal, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {reveal ? (
        <video
          src="https://res.cloudinary.com/dl23lsgjs/video/upload/v1774546503/cicbackground2_s0ajcn.mp4"
          autoPlay
          loop
          muted
          playsInline
          onClick={(e)=>{
            e.target.muted=false
          }}
        />
      ) : (
        <p>Waiting for admin...</p>
      )}
    </div>
  );
}