import { ChangeEvent, FormEvent, useState } from "react";

import { postLogin } from "../../services/auth";
import { useNavigate } from "react-router-dom";

const Authtentication = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(e);

    const payload = {
      username,
      password,
    };

    try {
      const response = await postLogin(payload);
      localStorage.setItem("token", response?.token as string);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center h-screen gap-3 bg-slate-300"
    >
      <label>Authentication</label>

      <input
        type="username"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setUsername(e.target.value)
        }
        className="bg-white rounded-md p-2"
        placeholder="username :"
      />
      <input
        type="password"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
        className="bg-white rounded-md p-2"
        placeholder="password :"
      />
      <button type ="submit"
       className="bg-slate-700 text-white rounded-sm py-1 px-5">
        Login
      </button>
    </form>
  );
};

export default Authtentication;
