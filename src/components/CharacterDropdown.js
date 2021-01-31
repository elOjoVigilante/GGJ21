import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import * as consts from '../constants';

const Container = styled.div`
	position: absolute;
	left: ${(props) => `calc((${props.offsets.left} / ${props.currentScale}) - (${props.currentPositionX}px) / ${props.currentScale})`};
	top: ${(props) => `calc((${props.offsets.top} / ${props.currentScale}) - (${props.currentPositionY}px / ${props.currentScale}))`};
	background-color: #3FA3EF;
    z-index:3000;
    width: ${(props) => `calc(120px / ${props.currentScale})`};
    max-width: ${(props) => `calc(120px / ${props.currentScale})`};
    border: solid black 3px;
	border-radius: ${(props) => `calc(12px / ${props.currentScale})`};
    border-spacing: 0px;
	&& > div:first-child {
		border-top-left-radius: ${(props) => `calc(6px / ${props.currentScale})`};
		border-top-right-radius: ${(props) => `calc(6px / ${props.currentScale})`};
	}
	&& > div:last-child {
		border-bottom-left-radius: ${(props) => `calc(6px / ${props.currentScale})`};
		border-bottom-right-radius: ${(props) => `calc(6px / ${props.currentScale})`};
	}
`;

const SelectionItem = styled.div`
	cursor: pointer;
	text-align: center;
    width: 100%;
    display: table;
    color: #FFF;
    padding: ${(preps) => `calc(5px / ${preps.currentScale})`} ${(preps) => `calc(10px / ${preps.currentScale})`};
    background-color: ${(preps) => `${preps.backgroundColor}`};
	&&:hover {
		color: white;
		background-color: #000000;
	}
	&& > h2 {
		font-size: ${(preps) => `calc(13px / ${preps.currentScale})`};
		text-transform: capitalize;
        font-weight: bold;
        display: table-cell;
	}
`;

const CloseDropdown = styled(SelectionItem)`
	background-color: black;
	color: white;
    width:100%;
    font-size: ${(props) => `calc(15px / ${props.currentScale})`};
    font-weight:bold;
	text-align: center;
`;

function CharacterDropdown({
	currentClickPercentage,
	layoutDispatch,
	addClick,
	currentClickCoords,
	currentImage,
    currentScale,
    currentPositionX,
    currentPositionY
}) {
	const charactersRemaining = Object.values(currentImage).filter((char) => {
		return char.hasOwnProperty('found') && !char.found && char;
	});
    
    const alternatingColor = ['#188de6', '#3fa3ef'];

	// off sets the dropdown to remain within the window/image
	const getOffset = () => {
		const obj = {};
		// when a character is found, it is removed from dropdown, this ensures placement
		const charOffset = charactersRemaining.length * 30;
		const offsets = {
			right: `calc(${
				currentClickPercentage && currentClickPercentage.x
			}% + (50px * ${currentScale}))`,
			left: `calc(${
				currentClickPercentage && currentClickPercentage.x
			}% - 115px - (15px * ${currentScale}))`,
			up: `calc(${
				currentClickPercentage && currentClickPercentage.y
			}% - ${charOffset}px + (30px * ${currentScale}))`,
			down: `calc(${
				currentClickPercentage && currentClickPercentage.y
			}%)`,
		};

		// 120 is width of dropdown + selection square
		currentClickCoords.x + (50 * currentScale) + (100 / currentScale) > window.outerWidth
			? (obj.left = offsets.left)
			: (obj.left = offsets.right);

		// 52 is nav height, 262 is dropdown height, add scroll offset amount
		currentClickCoords.y - 52 + (330 / currentScale) - (currentPositionY / currentScale) < (window.outerHeight - (150 / currentScale))
			? (obj.top = offsets.down)
			: (obj.top = offsets.up);

		return obj;
	};

	return (
		<Container
			x={currentClickPercentage && currentClickPercentage.x}
			y={currentClickPercentage && currentClickPercentage.y}
			windowScrollX={currentClickPercentage.windowScrollX}
			windowScrollY={currentClickPercentage.windowScrollY}
			offsets={getOffset()}
            currentScale={currentScale}
            currentPositionX={currentPositionX}
            currentPositionY={currentPositionY}
		>
			{charactersRemaining.map((char, index) => {
				return (
					<SelectionItem
                        currentScale={currentScale}
                        currentPositionX={currentPositionX}
                        currentPositionY={currentPositionY}
                        backgroundColor={alternatingColor[index % alternatingColor.length]}
						onClick={(e) => {
							e.stopPropagation();
							addClick(char.name);
						}}
						key={`${char.name}`}
					>
                        <h2>{char.title}</h2>
					</SelectionItem>
				);
			})}
			<CloseDropdown
                currentScale={currentScale}
                currentPositionX={currentPositionX}
                currentPositionY={currentPositionY}
				onClick={(e) => {
					e.stopPropagation();
					layoutDispatch({ type: consts.CLICKED });
				}}
			>
				X
			</CloseDropdown>
		</Container>
	);
}

CharacterDropdown.propTypes = {
	addClick: PropTypes.func,
	currentClickCoords: PropTypes.shape({
		x: PropTypes.number,
		y: PropTypes.number,
	}),
	currentClickPercentage: PropTypes.shape({
		windowScrollX: PropTypes.number,
		windowScrollY: PropTypes.number,
		x: PropTypes.number,
		y: PropTypes.number,
	}),
    currentScale: PropTypes.number,
    currentPositionX: PropTypes.number,
    currentPositionY: PropTypes.number,
	currentImage: PropTypes.any,
	imageHeight: PropTypes.number,
	layoutDispatch: PropTypes.func,
	layoutState: PropTypes.shape({
		currentClickCoords: PropTypes.shape({
			x: PropTypes.number,
			y: PropTypes.number,
		}),
		currentClickPercentage: PropTypes.shape({
			windowScrollX: PropTypes.number,
			windowScrollY: PropTypes.number,
		}),
		currentImageIndex: PropTypes.number,
		images: PropTypes.array,
	}),
};

export default React.memo(CharacterDropdown);
