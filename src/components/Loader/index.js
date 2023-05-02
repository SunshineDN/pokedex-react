import styled from "styled-components";

export const LoaderContainer = styled.div`
    /* position: ${({ position }) => position || "absolute"};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
    height: 100vh;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background};
    display: flex;
    justify-content: center;
    align-items: center;

    & > #Ebene_1 path,
    #Ebene_1 circle {
        fill: ${({ theme }) => theme.colors.primary};
    }
`;