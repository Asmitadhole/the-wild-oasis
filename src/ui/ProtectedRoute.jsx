import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PropTypes from "prop-types";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  // 1. Load the authenticated User
  const { isLoading, isAuthenticated } = useUser();

  // 2. If there is No Authenticated user, redirect to the login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 3. While loading, shiw a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4. If there is a user, reader the app
  if (isAuthenticated) return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  //   isAuthenticated: PropTypes.bool.isRequired,
};

export default ProtectedRoute;
