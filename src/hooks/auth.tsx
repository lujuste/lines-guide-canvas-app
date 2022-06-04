import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect
} from "react";
import api from "../services/api";

interface IUser {
  id: string;
  people_id: string;
  email: string;
  avatar: string;
  is_teacher: boolean;
  is_admin: boolean;
  avatar_url: string;
  people: {
    id: string;
    address_id: string;
    contact_id: string;
    first_name: string;
    last_name: string;
    born_at: string;
    gender: string;
    cpf: string;
    is_finished: true;
    created_at: string;
    updated_at: string;
  };
  address: {
    id: string;
    zipcode: string;
    street: string;
    number: number;
    district: string;
    city: string;
    state: string;
    country: string;
    is_finished: boolean;
    created_at: string;
    updated_at: string;
  };
  contact: {
    id: string;
    phone: string;
    is_finished: boolean;
    created_at: string;
    updated_at: string;
  };
}

interface IData {
  user: {
    id: string;
    people_id: string;
    email: string;
    avatar: "avatar_default.png" | string;
    is_admin: boolean;
    is_blocked: boolean;
    created_at: string;
    updated_at: string;
    avatar_url: string;
  };
  people: {
    id: string;
    address_id: string;
    contact_id: string;
    first_name: string;
    last_name: string;
    born_at: string;
    gender: string;
    cpf: string;
    is_finished: boolean;
    created_at: string;
    updated_at: string;
  };
  address: {
    id: string;
    zipcode: string;
    street: string;
    number: number;
    district: string;
    city: string;
    state: string;
    country: string;
    is_finished: boolean;
    created_at: string;
    updated_at: string;
  };
  contact: {
    id: string;
    phone: string;
    is_finished: boolean;
    created_at: string;
    updated_at: string;
  };
  token: string;
  tokenFirebase: string;
}

interface AuthContextData {
  data: IData;
  loading: boolean;
  typeUser: "free" | "premium";
  signIn(email: string, password: string): Promise<void>;
  signOut(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IData | null>(null);
  const [loading, setLoading] = useState(true);
  const [typeUser, setTypeUser] = useState<"free" | "premium">("free");

  useEffect(() => {
    const autoLoad = async () => {
      const token = localStorage.getItem("@UXDOC:token");
      const data = localStorage.getItem("@UXDOC:data");

      if (token && data) {
        api.defaults.headers.authorization = `Bearer ${token}`;
        setData(JSON.parse(data));
      }

      try {
        const fetchProfile = await api.get("profile");
      } catch (error) {
        // logout if token is expired
        signOut();
      }
    };

    autoLoad();
  }, []);

  const signIn = useCallback(async (email, password) => {
    try {
      const response = await api.post("sessions", {
        email,
        password
      });

      const { token, user, address, contact, people, tokenFirebase } =
        response.data as IData;

      //Verifying if teacher subscribed once already

      localStorage.setItem("@UXDOC:token", token);
      localStorage.setItem("@UXDOC:data", JSON.stringify(response.data));

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ user, address, contact, people, token, tokenFirebase });
    } catch (error: any) {
      throw error;
    }
  }, []);

  const signOut = useCallback(async () => {
    localStorage.removeItem("@UXDOC:token");
    localStorage.removeItem("@UXDOC:data");

    setData(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        data,
        loading,
        typeUser,
        signIn,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// creating hook

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used with an AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
