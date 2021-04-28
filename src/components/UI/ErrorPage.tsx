import illustrationError from "assets/error.svg";
import UtilityPageWrapper from "components/UI/UtilityPageWrapper";

export default function ErrorPage({ error }: any) {
  console.log(error);

  return (
    <UtilityPageWrapper image={illustrationError}>
      <span>oh no! Something is broken.</span>
    </UtilityPageWrapper>
  );
}
