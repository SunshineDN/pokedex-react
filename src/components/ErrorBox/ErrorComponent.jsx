/* eslint-disable react/prop-types */
import { ErrorBox, ErrorBoxRelative, ErrorIcon, ErrorText } from "./Error"

const ErrorComponent = ({ message, component }) => {
  return (
    <>
      {component !== "profile" ? (
        <ErrorBox>
          <ErrorIcon />
          <ErrorText>{message}</ErrorText>
        </ErrorBox>
      ) : (
        <ErrorBoxRelative>
          <ErrorIcon />
          <ErrorText>{message}</ErrorText>
        </ErrorBoxRelative>
      )}
    </>
  )
}

export default ErrorComponent