import React, { FormEvent, useState } from "react";
import {
  Box,
  Button,
  Container,
  FormBox,
  Input,
  LoadingFlex,
  Wrapper
} from "./styles";
import logoUx from "../../../../assets/logo-uxdoc.svg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAuth } from "../../../../hooks/auth";
import PuffLoader from "react-spinners/PuffLoader";

interface Inputs {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      scale: 1.05,
      transition: {
        delayChildren: 0.5,
        type: "spring",
        duration: 1,
        stiffness: 200,
        staggerDirection: -1
      }
    }
  };

  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 1.9,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const onSubmit: SubmitHandler<Inputs> = async data => {
    try {
      setLoading(true);
      await signIn(data.email, data.password);
      setLoading(false);
    } catch (error: any) {
      if (
        error.response.data.message === "Incorrect email/password combination."
      ) {
        alert("E-mail ou senha incorreto.");
        setLoading(false);
      }
      console.log(error.response.data.message);
    }
  };

  return (
    <Container>
      <Wrapper>
        <FormBox
          initial="hidden"
          animate="show"
          variants={container}
          as={motion.form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <img alt="logo Uxdoc" className="img-logo" src={logoUx} />
          <Box>
            <Input
              type="email"
              name="email"
              placeholder="E-mail"
              required
              {...register("email")}
            />
            <Input
              type="password"
              name="password"
              placeholder="Senha"
              minLength={5}
              required
              {...register("password")}
            />
            <Button type="submit">
              {loading ? (
                <LoadingFlex>
                  <PuffLoader color="#ffff" size="28" />
                </LoadingFlex>
              ) : (
                `Entrar`
              )}
            </Button>
          </Box>
        </FormBox>
      </Wrapper>
    </Container>
  );
};

export default Login;
