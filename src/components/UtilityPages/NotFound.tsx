import UtilityPageWrapper from 'components/UtilityPages/UtilityPageWrapper';
import illustrationNotFound from 'assets/not_found.svg';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Button from 'components/UI/Button';

const NotFoundMessage = styled.p`
  margin: 1rem 0;
`;

export default function NotFound() {
  const history = useHistory();

  return (
    <UtilityPageWrapper image={illustrationNotFound}>
      <NotFoundMessage>Didn't expect that? Me niether.</NotFoundMessage>
      <Button
        type='button'
        variant={'primary'}
        onClick={() => history.push('/')}
      >
        Go Home
      </Button>
    </UtilityPageWrapper>
  );
}
