import styled from "styled-components";

export const LoaderContainer = styled.div`
    position: ${({ position }) => position || "absolute"};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;