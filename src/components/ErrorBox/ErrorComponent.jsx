/* eslint-disable react/prop-types */
import { ErrorBox, ErrorIcon, ErrorText } from "./Error"

const ErrorComponent = ({ message }) => {
  return (
    <ErrorBox>
      <ErrorIcon />
      <ErrorText>{message}</ErrorText>
    </ErrorBox>
  )
}

export default ErrorComponent