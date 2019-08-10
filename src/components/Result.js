import React, {useState} from 'react';

import styled from 'styled-components';
import 'antd/dist/antd.css';
import Controls from 'components/Controls';

const StyledResultWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f2f3f4;;
  margin: 1em 1em 2em 1em;
  height: 10em;
`;

const StyledResultThumbnail = styled.img`
  height: inherit;
  &:hover {
    border: 2px dotted black;
  }
`;

const StyledResultDetails = styled.div`
  padding: 0.5em;
`;

const StyledTitle = styled.div`
  font-weight: bold;
  text-align: left;
`;

const StyledDescription = styled.p`
  text-align: left;
  margin-top: 0.6em;
`;

const Result =({watchVideo, result}) =>{
  let {snippet,id} = result;
  console.log('inside result')
  return (
    <StyledResultWrapper>
      <StyledResultThumbnail src={snippet.thumbnails.high.url} alt="thumbnail"/>
      <StyledResultDetails>
        <StyledTitle>{snippet.title}</StyledTitle>
        <StyledDescription>
          {snippet.description}
        </StyledDescription>
        <Controls  videoId={id.videoId} watchVideo={watchVideo} />
      </StyledResultDetails>
    </StyledResultWrapper>

  );
};

export default Result;
