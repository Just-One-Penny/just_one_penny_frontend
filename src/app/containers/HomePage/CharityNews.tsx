import React from 'react';
import styled from 'styled-components/macro';

export const CharityNews = () => {
  return (
    <Container>
      <H2>Charity News</H2>

      <CharitiesContainer>
        <CharityCard>
          <Mask>
            <MaskImg
              src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/08/13/19/wind-and-solar.jpg"
              alt="charity one"
            />
          </Mask>

          <CharityCardDetails>
            <Title>
              Why green charities should shift campaigning away from the climate
            </Title>

            <PublishedDate>8/27/2020</PublishedDate>
          </CharityCardDetails>
        </CharityCard>

        <CharityCard>
          <Mask>
            <MaskImg
              src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/08/13/19/wind-and-solar.jpg"
              alt="charity two"
            />
          </Mask>

          <CharityCardDetails>
            <Title>
              Premier League stars create #PlayersTogether initiative to support
              NHS charities
            </Title>

            <PublishedDate>4/8/2020</PublishedDate>
          </CharityCardDetails>
        </CharityCard>

        <CharityCard>
          <Mask>
            <MaskImg
              src="https://video-images.vice.com/test-uploads/articles/5eceae1504ee25009b133490/lede/1590603286527-AbortionPills.jpeg?crop=1xw:0.8425xh;0xw,0.1425xh&amp;resize=1200:*"
              alt="charity three"
            />
          </Mask>

          <CharityCardDetails>
            <Title>
              Trump&apos;s FDA Won't Let Women Get Abortion Pills Remotely In a
              Pandemic. So The ACLU Is Suing.
            </Title>

            <PublishedDate>5/27/2020</PublishedDate>
          </CharityCardDetails>
        </CharityCard>

        <CharityCard>
          <Mask>
            <MaskImg
              src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/08/13/19/wind-and-solar.jpg"
              alt="charity four"
            />
          </Mask>

          <CharityCardDetails>
            <Title>
              Why green charities should shift campaigning away from the climate
            </Title>

            <PublishedDate>8/27/2020</PublishedDate>
          </CharityCardDetails>
        </CharityCard>
      </CharitiesContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  background: #f2f2f2 0% 0% no-repeat padding-box;
  margin-bottom: 3rem;
`;

const H2 = styled.h2`
  color: #333333;
  font-size 1.75rem;
  margin-bottom: 2rem;

   @media only screen and (max-width: 375px) {
    font-size: 1.3rem;
    font-weight: 900;
  }
`;

const CharitiesContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 1024px) {
    width: 90%;
  }

  @media only screen and (max-width: 768px) {
    width: 80%;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  @media only screen and (max-width: 475px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const CharityCard = styled.div`
  box-shadow: 0px 2px 6px #00000029;
  overflow: hidden;
  border-radius: 5px;

  flex: 0 1 17%;
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-right: 2rem;
  }

  @media only screen and (max-width: 768px) {
    flex: 0 1 40%;
    margin-bottom: 1.5rem;

    &:not(:last-child) {
      margin-right: 0rem;
    }
  }

  @media only screen and (max-width: 475px) {
    flex: none;
    width: 65%;

    &:not(:last-child) {
      margin-right: 0;
    }
  }
`;

const Mask = styled.figure`
  height: 10rem;
  margin-bottom: 0.5rem;
`;

const MaskImg = styled.img`
  width: 100%;
  height: 100%;
`;

const CharityCardDetails = styled.div`
  color: #333;
  height: 4.3rem;

  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 0.85rem;
  margin: 0 0.75rem 0.5rem 0.5rem;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const PublishedDate = styled.p`
  font-size: 0.25rem;
  margin: auto 0.75rem 0.5rem 0.5rem;
`;
