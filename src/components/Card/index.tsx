import * as styled from './styled';
import Chip from '../../assets/images/chip.jpg';

interface ImageCard {
  name: string;
  url: string;
  // filter: (arg: unknown) => unknown;
}

interface PropsCard {
  cardName: string;
  behindTheCard: boolean;
  frontOfCard: boolean;
  imageCard?: ImageCard[];
  isVisible?: boolean;
  numberCard?: string;
  name?: string;
  dueDate?: string;
  codeSecurity?: string;
}

const Card = ({
  cardName,
  numberCard,
  behindTheCard,
  frontOfCard,
  imageCard,
  isVisible,
  dueDate,
  name,
  codeSecurity,
}: PropsCard) => {
  let image = '';
  imageCard?.filter((imageArray: { name: string; url: string }) => {
    if (imageArray.name === cardName) {
      image = imageArray.url;
    }
  });

  return (
    <styled.Container isVisible={isVisible}>
      <styled.H2>{cardName.toUpperCase()}</styled.H2>

      <styled.CardContainer>
        <styled.BehindCard behindTheCard={behindTheCard}>
          <styled.BehindTheCard>
            <styled.MagneticStripe />
            <styled.CodeCard>
              <styled.Input placeholder="security code" value={codeSecurity} disabled />
            </styled.CodeCard>
          </styled.BehindTheCard>
        </styled.BehindCard>

        <styled.FrontOfCard front={frontOfCard}>
          <styled.FrontCard>
            <styled.InfoCard>
              <styled.Img src={Chip} alt="Chip" width={'35px'} marginLeft={'0.7rem'} />
              <styled.Input placeholder="0000 1111 2222 3333" value={numberCard} disabled width={'100%'} />
              <styled.Input placeholder="John deere" value={name} disabled width={'100%'} />
              <styled.Input placeholder="10/29" value={dueDate} disabled />
            </styled.InfoCard>

            <styled.Img src={image} alt={cardName} />
          </styled.FrontCard>
        </styled.FrontOfCard>
      </styled.CardContainer>
    </styled.Container>
  );
};

export default Card;
