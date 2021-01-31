import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ImageElements from '../components/ImageElements';
import glassImage from '../images/imageGlass.png';
import zoomInImage from '../images/imageZoomIn.png';
import zoomOutImage from '../images/imageZoomOut.png';
import useResizeObserver from '../hooks/useResizeObserver';

import * as consts from '../constants';

const Container = styled.div`
	width: 100%;
	height: 100%;
    touch-action: manipulation;
    overflow: hidden;
`;

const ImageContainer = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
    max-width: 100%;
`;

const Tools = styled.div`
	position: absolute;
    top: 60px;
    left: 10px;
    width: 200px;
    height:30px;
    z-index:1010;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  top: 40%;
  left: 38%;
  cursor: pointer;
  z-index:4000;
`;

const Img = styled.img`
    width:100%;
`;

const Glass = styled.img`
    float:left;
    width:60px;
    height:60px;
`;

const Zoom = styled.img`
    float:left;
    width:27px;
    height:27px;
    cursor:pointer;
    border:none;
    margin:15px 5px;
`;

function Image({
	currentImage,
	layoutDispatch,
	clicksArray,
	isSelectCharacterShown,
	currentClickPercentage,
	currentClickCoords,
    currentScale,
    currentPositionX,
    currentPositionY,
    currentIsOpened,
    currentImageIndex,
    hintCount,
    introCount,
}) {
	const [imageDims, setImageDims] = useState({ height: 0, width: 0 });
	const [ref, entry] = useResizeObserver();
    const [thisScale, setThisScale] = useState(currentScale);
    const [thisPositionX, setThisPositionX] = useState(currentPositionX);
    const [thisPositionY, setThisPositionY] = useState(currentPositionY);
    const [isOpened, setOpened] = useState(currentIsOpened);
    const [entered, setEntered] = useState(false);
    
    const openHint = () => setOpened(true);
    const closeHint = () => setOpened(false);

	// store image dims in state
	useEffect(() => {
		if (entry.contentRect) {
			setImageDims({
				width: entry.contentRect.width,
				height: entry.contentRect.height,
			});
		}
	}, [entry]);

	const getClickArea = (e,vals,valx,valy) => {
        
		e.persist();

		const x = e.clientX - (20 * vals);
		const y = e.clientY - (40 * vals);

		// changed from user
		layoutDispatch({
			type: consts.CLICKED,
			// in percentages
			currentClickPercentage: {
				x: (x / imageDims.width) * 100,
				y: (y / imageDims.height) * 100,
				windowScrollY: window.scrollY,
				windowScrollX: window.scrollX,
			},
			// in coordinates
			currentClickCoords: {
				x: e.clientX,
				y: e.clientY,
				windowScrollY: window.scrollY,
				windowScrollX: window.scrollX,
			},
            // current scale
            currentScale: vals,
            // current positionX
            currentPositionX: valx,
            // current positionY
            currentPositionY: valy,
		});
	};

	const checkUserSelection = (character) => {
		// using percentages so the image can be responsive
		// and are clicked on image will be the same

		// size waldo can be found within (width of the selection square in %)
		const selectionWidthInPercentage = (((40 * currentScale) / imageDims.width) * 100) / 2;
		const selectionHeightInPercentage = (((40 * currentScale) / imageDims.height) * 100) / 2;

		// position of the characters y coordinate in percentage
		// minus scrollY in precentage
		const charY = currentImage[character].y + (((currentPositionY / currentScale) / imageDims.height) * 100);

		// position of the characters x coordinate in percentage
		// minus scrollX in precentage
		const charX = currentImage[character].x + (((currentPositionX / currentScale) / imageDims.width) * 100);

		// adding the percentage the selection container is offset by
		const clickY = (currentClickPercentage.y / currentScale) + (20 / imageDims.height) * 100;
		const clickX = (currentClickPercentage.x / currentScale) + (20 / imageDims.width) * 100;

		// if the target character is within the user selected area
		if (
			clickX + selectionWidthInPercentage > charX &&
			clickX - selectionWidthInPercentage < charX &&
			clickY + selectionHeightInPercentage > charY &&
			clickY - selectionHeightInPercentage < charY
		) {
			return true;
		}
	};

	const addClick = (character) => {
		if (checkUserSelection(character)) {
			layoutDispatch({
				type: consts.CHARACTER_FOUND,
				character,
			});
		} else {
            var wrongClicks = clicksArray.filter(function(click) {
              return click.characterFound == false;
            });
            //Desplegar ayuda
            if(wrongClicks.length >= 2){
                layoutDispatch({
				type: consts.TOGGLE_HINT,
			});
            }
			layoutDispatch({
				type: consts.CHARACTER_NOT_FOUND,
			});
		}
	};

	return (
    <Container>
        <TransformWrapper         
        scale={
                thisScale
        }
        positionX={
                thisPositionX
        }
        positionY={
                thisPositionY
        }
        wheel={{
                    step: 20
                  }}
        zoomIn={{
                    step: 5
                  }}
        zoomOut={{
                    step: 5
                  }}
        doubleClick={{
                    disabled:true
        }}
        options= {{ minScale:1, maxScale: 3, limitToBounds:false, limitToWrapper:false, centerContent:false }}
      >
        {({ 
         zoomIn,
         zoomOut,
         setTransform,
         positionX,
         positionY,
         scale,
         ...rest
        }) => (
            <>
            
            <Tools>
              <Zoom onClick={zoomOut} src={zoomOutImage}></Zoom>
              <Glass src={glassImage}></Glass>
              <Zoom onClick={zoomIn} src={zoomInImage}></Zoom>
            </Tools>
            <TransformComponent>
                <ImageContainer
                onClick={(e) => {
                    getClickArea(e,scale,positionX,positionY);
				}}
                >
				    <Img src={currentImage.src} alt="" ref={ref}></Img>
                
				{/* consolidated characterDropdown, characterReveal and userSelection into ImageElements */}
                    <ImageElements
                        clicksArray={clicksArray}
                        isSelectCharacterShown={isSelectCharacterShown}
                        currentClickPercentage={currentClickPercentage}
                        layoutDispatch={layoutDispatch}
                        imageDims={imageDims}
                        addClick={addClick}
                        currentClickCoords={currentClickCoords}
                        currentImage={currentImage}
                        currentScale={currentScale}
                        currentPositionX={currentPositionX}
                        currentPositionY={currentPositionY}
                    />
                </ImageContainer>
            </TransformComponent>
            
        </>
        )}
        </TransformWrapper>
    </Container>
	);
}

Image.propTypes = {
	clicksArray: PropTypes.array,
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
	currentImage: PropTypes.shape({
		src: PropTypes.string,
	}),
	isSelectCharacterShown: PropTypes.bool,
	layoutDispatch: PropTypes.func,
};

export default React.memo(Image);
