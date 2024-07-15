const url: string = `https://go-foods-server.onrender.com/go-foods/sales-person/update-credentials`;
import axios from "axios";

export const updatePass = async (data: any) => {
  const token = localStorage.getItem("authToken");

  try {
    const res = await axios.patch(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
    return res;
  } catch (error: any) {
    console.error(error);
    return error.response
      ? error.response.data
      : { error: "An error occurred" };
  }
};

export const login = async (data: any) => {
  try {
    const res = await axios.post(
      "https://go-foods-server.onrender.com/go-foods/sales-person/login",
      data
    );
    console.log("res", res);
    return res;
  } catch (error: any) {
    console.error(error);
    return error.response
      ? error.response.data
      : { error: "An error occurred" };
  }
};

export const getOrg = async () => {
  try {
    const res = await axios.get(
      "https://go-foods-server.onrender.com/go-foods/organization"
    );
    console.log("res", res);
    return res.data;
  } catch (error) {
    console.error("Error fetching organization data:", error);
    return [];
  }
};

export const CreateOrg = async (data: any) => {
  try {
    const res = await axios.post(
      "https://go-foods-server.onrender.com/go-foods/organization",
      data
    );
    return res.data;
  } catch (error) {
    console.error("Error creating organization:", error);
    return null;
  }
};

// export const getWebData = async () => {
//   return await fetch(`${url}W`, { method: "GET" })
//     .then((res) => {
//       return res.json();
//     })
//     .then((res) => {
//       console.log(res);
//       return res.data;
//     });
// };

// export const createWebData = async (data: any) => {
//   return await axios.PATCH(`${url}`, data)
//     .then((res) => {
//       return res.json();
//     })
//     .then((res) => {
//       console.log(res);
//       return res.data;
//     });
// };

// export const createWebData = async (data: any) => {
//   try {
//     const response = await fetch(`${url}/create-web`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });

//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error("API response error:", response.status, errorText);
//       throw new Error("Network response was not ok");
//     }

//     const result = await response.json();
//     console.log(result);
//     return result.data;
//   } catch (error) {
//     console.error("Error creating organization:", error);
//     throw error;
//   }
// };

// export const likeWebData = async (ID: string) => {
//   return await fetch(`${url}/update-web-like/${ID}`, { method: "PATCH" })
//     .then((res) => {
//       return res.json();
//     })
//     .then((res) => {
//       console.log(res);
//       return res.data;
//     });
// };

// src/Api/Api.js

const LOCAL_STORAGE_KEY = "dummyData";

const loadDummyData = () => {
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

// const saveDummyData = (data: any) => {
//   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
// };

let dummyData = loadDummyData();

// export const createWebData = async (newOrganization: any) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const id = dummyData.length + 1;
//       const code = Math.floor(100000 + Math.random() * 900000).toString();
//       const newOrgWithId = { id, ...newOrganization, code };
//       dummyData.push(newOrgWithId);
//       saveDummyData(dummyData);
//       resolve(newOrgWithId);
//     }, 500);
//   });
// };

export const getWebData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyData);
    }, 500);
  });
};
