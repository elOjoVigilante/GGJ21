import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import CharacterDropdown from './CharacterDropdown';

const UserSelection = styled.div`
	width: 40px;
	height: 40px;
	position: absolute;
	top: ${(props) =>
		props.y && `calc((${props.y}% / ${props.currentScale}) - (${props.currentPositionY}px / ${props.currentScale}))`};
	left: ${(props) =>
        props.x && `calc((${props.x}% / ${props.currentScale}) - (${props.currentPositionX}px / ${props.currentScale}))`};
	border: solid 4px black;
	border-radius: 8px;
`;

function ImageElements({
	clicksArray,
	isSelectCharacterShown,
	currentClickPercentage,
	layoutDispatch,
	imageDims,
	addClick,
	currentClickCoords,
	currentImage,
    currentScale,
    currentPositionX,
    currentPositionY
}) {
	return (
		<>
			{isSelectCharacterShown && (
				<>
					<CharacterDropdown
						layoutDispatch={layoutDispatch}
						imageHeight={imageDims.height}
						addClick={addClick}
						currentClickPercentage={currentClickPercentage}
						currentClickCoords={currentClickCoords}
						currentImage={currentImage}
                        currentScale={currentScale}
                        currentPositionX={currentPositionX}
                        currentPositionY={currentPositionY}
					/>
					<UserSelection
						x={currentClickPercentage && currentClickPercentage.x}
						y={currentClickPercentage && currentClickPercentage.y}
						windowScrollX={currentClickPercentage.windowScrollX}
						windowScrollY={currentClickPercentage.windowScrollY}
                        currentScale={currentScale}
                        currentPositionX={currentPositionX}
                        currentPositionY={currentPositionY}
					/>
				</>
			)}
		</>
	);
}

ImageElements.propTypes = {
	addClick: PropTypes.func,
	clicksArray: PropTypes.shape({
		length: PropTypes.number,
		map: PropTypes.func,
	}),
    currentScale: PropTypes.number,
    currentPositionX: PropTypes.number,
    currentPositionY: PropTypes.number,
	currentClickCoords: PropTypes.object,
	currentClickPercentage: PropTypes.shape({
		windowScrollX: PropTypes.number,
		windowScrollY: PropTypes.number,
		x: PropTypes.number,
		y: PropTypes.number,
	}),
	currentImage: PropTypes.any,
	imageDims: PropTypes.shape({
		height: PropTypes.number,
	}),
	isSelectCharacterShown: PropTypes.bool,
	layoutDispatch: PropTypes.func,
};

export default React.memo(ImageElements);
