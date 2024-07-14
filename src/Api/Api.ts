// const url: string = `https://go-foods-server.onrender.com/`;

// export const getWebData = async () => {
//   return await fetch(`${url}/get-web`, { method: "GET" })
//     .then((res) => {
//       return res.json();
//     })
//     .then((res) => {
//       console.log(res);
//       return res.data;
//     });
// };

// export const createWebData = async (data: any) => {
//   return await fetch(`${url}/create-web`, data)
//     .then((res) => {
//       return res.json();
//     })
//     .then((res) => {
//       console.log(res);
//       return res.data;
//     });
// };

// // src/Api/Api.js
// // src/Api/Api.js
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

const saveDummyData = (data: any) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};

let dummyData = loadDummyData();

export const createWebData = async (newOrganization: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const id = dummyData.length + 1;
      const code = Math.floor(100000 + Math.random() * 900000).toString();
      const newOrgWithId = { id, ...newOrganization, code };
      dummyData.push(newOrgWithId);
      saveDummyData(dummyData);
      resolve(newOrgWithId);
    }, 500);
  });
};

export const getWebData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyData);
    }, 500);
  });
};
