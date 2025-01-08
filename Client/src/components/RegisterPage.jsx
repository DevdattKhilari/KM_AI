
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import { MdEmail } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
import { BsShieldFillExclamation } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import axios from "axios";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(74, 222, 128, 0.2); }
  50% { box-shadow: 0 0 20px rgba(74, 222, 128, 0.4); }
  100% { box-shadow: 0 0 5px rgba(74, 222, 128, 0.2); }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom right, #111827, #1f2937);
  overflow: hidden;
  position: relative;
`;

const BackgroundElement = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(74, 222, 128, 0.1), rgba(34, 197, 94, 0.05));
  backdrop-filter: blur(5px);
  animation: ${float} 10s ease-in-out infinite;
`;

const RegisterCard = styled(motion.div)`
  max-width: 1024px;
  width: 100%;
  display: flex;
  background: rgba(17, 24, 39, 0.7);
  backdrop-filter: blur(20px);
  border-radius: 1rem;
  border: 1px solid rgba(74, 222, 128, 0.1);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 10;
`;

const ImageSection = styled.div`
  display: none;
  width: 50%;
  position: relative;
  @media (min-width: 768px) {
    display: block;
  }
`;

const FormSection = styled(motion.div)`
  width: 100%;
  padding: 2.5rem;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 0.75rem 0.75rem 2.5rem;
  background: rgba(31, 41, 55, 0.7);
  border: 1px solid rgba(74, 222, 128, 0.2);
  border-radius: 0.5rem;
  color: #fff;
  transition: all 0.3s;
  
  &::placeholder {
    color: rgba(156, 163, 175, 0.7);
  }
  
  &:focus {
    outline: none;
    border-color: #4ade80;
    box-shadow: 0 0 0 2px rgba(74, 222, 128, 0.2);
    animation: ${glow} 2s ease-in-out infinite;
  }
  
  &:hover {
    border-color: #4ade80;
  }
`;

const Button = styled(motion.button)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background: linear-gradient(45deg, #4ade80, #22c55e);
  color: white;
  font-weight: 600;
  transition: all 0.3s;
  cursor: pointer;
  
  &:hover {
    background: linear-gradient(45deg, #22c55e, #16a34a);
    box-shadow: 0 0 20px rgba(74, 222, 128, 0.4);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const GlowingText = styled.h2`
  color: #fff;
  text-shadow: 0 0 10px rgba(74, 222, 128, 0.5);
`;

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/signin", {
        Useremail: email,
        Username: username,
        Password: password,
      });
      if (response.status === 200) {
        setRegistrationStatus("Registration successful. Redirecting...");
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 3000);
      }
    } catch (error) {
      setRegistrationStatus("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageContainer>
      {[...Array(20)].map((_, i) => (
        <BackgroundElement
          key={i}
          style={{
            width: `${Math.random() * 200 + 50}px`,
            height: `${Math.random() * 200 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      <RegisterCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <ImageSection>
          <img
            src="soilimage.png"
            alt="soil"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, rgba(17, 24, 39, 0.7), rgba(17, 24, 39, 0.9))",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "2rem",
            }}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <GlowingText className="text-4xl font-bold mb-6">जन्मभूमि से जुड़े रहे</GlowingText>
              <p className="text-gray-300 text-lg">Connect with your roots</p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Link to="/">
                <button className="bg-transparent border border-green-400 text-green-400 px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-green-400 hover:text-white">
                  Login
                </button>
              </Link>
            </motion.div>
          </div>
        </ImageSection>

        <FormSection
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="text-center mb-10">
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              src="logobhoomi.png"
              alt="logo"
              className="mx-auto w-20 h-20 mb-4"
            />
            <GlowingText className="text-3xl font-bold mb-2">Create Account</GlowingText>
            <p className="text-gray-400">Please fill in your details</p>
          </div>

          {registrationStatus && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mb-6 p-3 rounded-lg text-center ${
                registrationStatus.includes("successful") 
                  ? "bg-green-900/50 text-green-400" 
                  : "bg-red-900/50 text-red-400"
              }`}
            >
              {registrationStatus}
            </motion.div>
          )}

          <form className="space-y-6">
            <div>
              <label className="block text-gray-300 font-medium mb-2">Email</label>
              <div className="relative">
                <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400" />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 font-medium mb-2">Username</label>
              <div className="relative">
                <FaUserShield className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400" />
                <Input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Choose a username"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 font-medium mb-2">Password</label>
              <div className="relative">
                <BsShieldFillExclamation className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-400" />
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                />
              </div>
            </div>

            <Button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              onClick={handleRegister}
              disabled={isLoading}
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  style={{ width: "1.5rem", height: "1.5rem", border: "2px solid white", borderTopColor: "transparent", borderRadius: "50%" }}
                />
              ) : (
                <>
                  Register
                  <AiOutlineSwapRight className="ml-2" />
                </>
              )}
            </Button>
          </form>
        </FormSection>
      </RegisterCard>
    </PageContainer>
  );
};

export default RegisterPage;
