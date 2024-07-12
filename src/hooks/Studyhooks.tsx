import { useSelector } from "react-redux";
import useSWR from "swr";
import { getAllUser, getOneUserStudy } from "../Api/Studyapi";
import { jwtDecode } from "jwt-decode";

export const useStudies = () => {
  const user = useSelector((state: any) => state.user);

  const decode: any = jwtDecode;
  const userId = decode(user?.data)?.id;

  const { data } = useSWR(
    userId ? `/read-study/${userId}` : null,
    () => {
      if (userId) {
        return getOneUserStudy(userId).then((res) => {
          console.log(userId);
          return res;
        });
      }
    },
    { refreshInterval: 5000 }
  );

  console.log(data);

  return { data };
};

export const getAll = () => {
  const { data } = useSWR(
    `read-study`,
    () => {
      return getAllUser().then((res) => {
        return res.data;
      });
    },
    { refreshInterval: 5000 }
  );
  return { data };
};
