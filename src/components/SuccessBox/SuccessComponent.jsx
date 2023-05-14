/* eslint-disable react/prop-types */
import { SuccessBox, SuccessBoxRelative, SuccessIcon, SuccessText } from "./Success"

const SuccessComponent = ({ message, component }) => {
  return (
    <>
      {component !== "profile" ? (
        <SuccessBox>
          <SuccessIcon />
          <SuccessText>{message}</SuccessText>
        </SuccessBox>
      ) : (
        <SuccessBoxRelative>
          <SuccessIcon />
          <SuccessText>{message}</SuccessText>
        </SuccessBoxRelative>
      )}
    </>
  )
}

export default SuccessComponent;