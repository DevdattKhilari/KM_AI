
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaUserShield } from "react-icons/fa";
import { BsShieldFillExclamation } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import axios from "axios";
import styled, { keyframes } from "styled-components";

// Keyframe Animations
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

const LoginCard = styled(motion.div)`
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

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/login", {
        Username: username,
        Password: password,
      });
      if (response.status === 200) {
        setLoginStatus("Login successful!");
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 2000);
      }
    } catch (error) {
      setLoginStatus("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageContainer>
      <BackgroundElement
        style={{
          width: "400px",
          height: "400px",
          top: "10%",
          left: "10%",
        }}
      />
      <BackgroundElement
        style={{
          width: "300px",
          height: "300px",
          bottom: "10%",
          right: "10%",
        }}
      />

      <LoginCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FormSection>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center mb-4">
              <img src="logobhoomi.png" alt="logo" className="w-16 h-16" />
            </div>
            <GlowingText className="text-2xl font-bold mb-6">Welcome Back!</GlowingText>
          </motion.div>

          <form onSubmit={handleLogin} className="space-y-6">
            {loginStatus && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-3 rounded-lg text-center ${
                  loginStatus.includes("successful")
                    ? "text-green-400 bg-green-900/30"
                    : "text-red-400 bg-red-900/30"
                }`}
              >
                {loginStatus}
              </motion.div>
            )}

            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-semibold">Username</label>
              <div className="relative">
                <FaUserShield className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-semibold">Password</label>
              <div className="relative">
                <BsShieldFillExclamation className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? (
                "Logging in..."
              ) : (
                <>
                  Login <AiOutlineSwapRight className="ml-2" />
                </>
              )}
            </Button>

            <div className="mt-4 text-center text-gray-400">
              <Link
                to="/forgot-password"
                className="hover:text-green-400 transition-colors"
              >
                Forgot your password?
              </Link>
            </div>

            <div className="text-center text-gray-400">
              <span>Don't have an account? </span>
              <Link
                to="/register"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                Register here
              </Link>
            </div>
          </form>
        </FormSection>

        <ImageSection>
          <img
            src="soilimage.png"
            alt="soil"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl font-yatra mb-2">जन्मभूमि से जुड़े रहे</h2>
            </div>
          </div>
        </ImageSection>
      </LoginCard>
    </PageContainer>
  );
};

export default LoginPage;
