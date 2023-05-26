import { useEffect, useState } from "react";

const useUserData = (locationUser, navigate) => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (locationUser === "1" || locationUser === "2") {
      const fetchUserData = async () => {
        try {
          const response = await fetch(
            `https://api7.cloudframework.io/recruitment/fullstack/users?id=${locationUser}`
          );
          const data = await response.json();
          if (response.ok) {
            setUserData(data.data);
          } else {
            setError("No se pudo obtener los datos del usuario");
          }
        } catch (error) {
          setError(error.message);
        }
      };

      fetchUserData();
    } else {
      navigate("/404");
    }
  }, [locationUser, navigate]);

  return { userData, error };
};

export default useUserData;
