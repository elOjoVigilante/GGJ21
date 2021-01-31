import React, { useReducer, useEffect } from 'react';
import { BrowserRouter, Link, withRouter, Route, Switch, useHistory } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import './App.css';
import Menu from './InterfazMenu';
import Formulario from './FormularioMensaje';
import imageOne from './images/mapa.png';

import * as consts from './constants';

import Image from './layouts/Image';
import Cover from './layouts/Cover';

function layoutReducer(state, action) {
	switch (action.type) {
		case consts.SAVE_UID:
			return {
				...state,
				uid: action.uid,
			};
		case consts.SAVE_USERNAME:
			return {
				...state,
				allScores: {
					...state.allScores,
					userScores: {
						...state.allScores.userScores,
						name: action.username,
					},
				},
				hasNameBeenSet: false,
			};
		case consts.SAVE_ALL_SCORES:
			return {
				...state,
				allScores: { ...state.allScores, ...action.allScores },
			};
		case consts.START_GAME:
			return {
				...state,
				hasGameStarted: true,
			};

		case consts.IMAGE_RESIZE:
			return {
				...state,
				currentImageHeight: action.height,
			};

		case consts.CLICKED:
				const oneClick = {
				x: state.currentClickPercentage.x / state.currentScale,
				y: state.currentClickPercentage.y / state.currentScale,
				windowScrollX: state.currentPositionX / state.currentScale,
				windowScrollY: state.currentPositionY / state.currentScale,
				characterFound: false,
			};
			const allClicks =
				state.clicksArray.length > 0
					? [oneClick, ...state.clicksArray]
					: [oneClick];

			return {
				...state,
				isSelectCharacterShown: false,
				clicksArray: allClicks,
			};

		case consts.CHARACTER_FOUND:
			const characterFoundClick = {
				x: state.currentClickPercentage.x / state.currentScale,
				y: state.currentClickPercentage.y / state.currentScale,
				windowScrollX: state.currentPositionX / state.currentScale,
				windowScrollY: state.currentPositionY / state.currentScale,
				characterFound: true,
			};

			const characterFoundState = {
				...state,
				clicksArray: [characterFoundClick, ...state.clicksArray],
				isSelectCharacterShown: false,
			};

			characterFoundState[state.images[state.currentImageIndex].string][
				action.character
			].found = true;

			return characterFoundState;

		case consts.CHARACTER_NOT_FOUND:
			const wrongClick = {
				x: state.currentClickPercentage.x / state.currentScale,
				y: state.currentClickPercentage.y / state.currentScale,
				windowScrollX: state.currentPositionX / state.currentScale,
				windowScrollY: state.currentPositionY / state.currentScale,
				characterFound: false,
			};
			const allWrongClicks =
				state.clicksArray.length > 0
					? [wrongClick, ...state.clicksArray]
					: [wrongClick];

			return {
				...state,
				isSelectCharacterShown: false,
				clicksArray: allWrongClicks,
			};
            
        case consts.TOGGLE_HINT:
			const hintState = { ...state };
            if(hintState.hintCount < 2){
                hintState.currentIsOpened = true;
            } else {
                hintState.currentIsOpened = false;
            }
			
			return hintState;
            
		case consts.TOGGLE_SELECTION_CONTAINER:
			if (action.coords) {
				return {
					selectionContainer: {
						x: action.coords.x,
						y: action.coords.y,
					},
					...state,
				};
			} else {
				return {
					selectionContainer: null,
					...state,
				};
			}
                
		case consts.LOADING_RESULTS:
			return {
				...state,
				clicksArray: [],
				isLoadingResult: true,
				hasResultBeenCalculated: true,
			};

		case consts.SHOW_RESULTS:
			const resultsState = { ...state };
			resultsState.isLoadingResult = false;
			resultsState.allScores.userScores[
				state.images[state.currentImageIndex].string
			][consts.USER_VISIT_ID] = action.result;

			return resultsState;

		case consts.NEXT_ROUND:
			const nextRoundState = { ...state };
			nextRoundState.currentImageIndex = state.currentImageIndex + 1;

			if (
				state.allScores.userScores.name !== '' &&
				!state.hasNameBeenSet
			) {
				nextRoundState.allScores.userScores.NameBeenSet = true;
			}

			    nextRoundState.currentScale = 1;
                nextRoundState.currentPositionX = 0;
                nextRoundState.currentPositionY = 0;
                nextRoundState.currentIsOpened = false;
                nextRoundState.hintCount = 0;
                nextRoundState.hasResultBeenCalculated = false;
			return nextRoundState;
                
        case consts.FIRST_ROUND:
			const firstRoundState = { ...state };
			firstRoundState.currentImageIndex = 0;

			firstRoundState.hasResultBeenCalculated = false;
			return firstRoundState;

		case consts.LOADING_FINAL_RESULTS:
			return {
				...state,
				clicksArray: [],
				isLoadingResult: true,
				hasResultBeenCalculated: true,
			};

		case consts.SHOW_FINAL_RESULTS:
			const finalResultsState = { ...state };
			finalResultsState.isLoadingResult = false;
			finalResultsState.allScores.userScores[
				state.images[state.currentImageIndex].string
			][consts.USER_VISIT_ID] = action.result;

			return finalResultsState;
                
        case consts.COUNT_HINT:
			const hintCountState = { ...state };
			hintCountState.hintCount += 1;
			return hintCountState;
                
        case consts.COUNT_INTRO:
			const introCountState = { ...state };
			introCountState.introCount += 1;
			return introCountState;
                
        case consts.RESET_GAME:
            const resetGameState = { ...state };
            resetGameState.imageOne = {
                src: imageOne,
                manzana: {
                    name: 'manzana',
                    title: 'Manzana',
                    x: 20,
                    y: 13,
                    found: false,
                },
            };
            resetGameState.currentImageIndex = 0;
            resetGameState.currentImage = null;
            resetGameState.clicksArray = [];
            resetGameState.currentScale = 1;
            resetGameState.currentPositionX = 0;
            resetGameState.currentPositionY = 0;
            resetGameState.currentIsOpened = false;
            resetGameState.hintCount = 0;
            resetGameState.hasResultBeenCalculated = false;
			return resetGameState;

		default:
			return state;
	}
}
            
const initialLayoutState = {
	allScores: {
		userScores: {
			imageOne: {},
			imageTwo: {},
			imageThree: {},
            imageFour: {},
			imageFive: {},
			imageSix: {},
            imageSeven: {},
			imageEight: {},
			name: '',
		},
	},
	uid: null,
	hasNameBeenSet: false,
	isImageShown: false,
	isLoadingResult: false,
	hasGameStarted: false,
	images: [
		{ src: imageOne, string: 'imageOne' },
	],
	currentImageIndex: 0,
	selectionContainer: null,
	// the selection container & dropdown
	isSelectCharacterShown: false,
	// all previous clicks to display on image (incorrect get hidden)
	clicksArray: [],
	// current click in percentage
	currentClickPercentage: null,
	// current click coords
	currentClickCoords: null,
	imageOne: {
		src: imageOne,
		manzana: {
			name: 'manzana',
            title: 'Manzana',
			x: 20,
			y: 13,
			found: false,
		},
	},
    // current scale
	currentScale: 1,
    // current positionX
	currentPositionX: 0,
    // current positionY
	currentPositionY: 0,
	hasResultBeenCalculated: false,
    currentIsOpened: false,
    hintCount: 0,
    introCount: 0,
};

function App() {
    const [layoutState, layoutDispatch] = useReducer(
		layoutReducer,
		initialLayoutState
	);
	const history = useHistory();
    
    const meta = {
      title: 'Buscando a Santi',
      description: 'responsive display',
      canonical: 'http://example.com/path/to/page',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'react,meta,document,html,tags'
        }
      }
    };

	// detect when all characters in an image have been found and then calculate results
	useEffect(() => {
		const allCharsFound = Object.values(
			layoutState[
				layoutState.images[layoutState.currentImageIndex].string
			]
		)
			.filter((char) => char.hasOwnProperty('found'))
			.every((char) => char.found);

		if (allCharsFound && !layoutState.hasResultBeenCalculated) {
			// display results page with loading icon

			// handle all characters found but not on last image
			// add finish timestamp, calc difference, load results
			if (
				layoutState.currentImageIndex + 1 !==
				layoutState.images.length
			) {
				layoutDispatch({ type: consts.LOADING_RESULTS });
				//history.push('/result');
                
                layoutDispatch({
				    type: consts.NEXT_ROUND,
                });
                history.push('/round');

				// calculate total time, store in firebase and return time
				/*addFinishTimestampAndCalculateTotal({
					image: `${
						layoutState.images[layoutState.currentImageIndex].string
					}`,
					userVisitId: consts.USER_VISIT_ID,
				}).then(*/
                    //(res) => {
					layoutDispatch({
						type: consts.SHOW_RESULTS,
						//result: res.data.totalTimeInMillis,
					});
				//}
                //);
				// handle gameover - store final finish timestamp and reveal all scores
			} else {
				layoutDispatch({ type: consts.LOADING_FINAL_RESULTS });
				history.push('/exit');

				/*addFinishTimestampAndCalculateTotal({
					image: `${
						layoutState.images[layoutState.currentImageIndex].string
					}`,
					userVisitId: consts.USER_VISIT_ID,
				}).then((res) => {*/
					layoutDispatch({
						type: consts.SHOW_FINAL_RESULTS,
						//result: res.data.totalTimeInMillis,
					});
				//});
			}
		}
	}, [layoutState, history]);

	// sign in to firebase anonymously
	/*useEffect(() => {
		firebase
			.auth()
			.signInAnonymously()
			.then((data) => {
				layoutDispatch({
					type: consts.SAVE_UID,
					uid: data.user.uid,
				});
			})
			.catch((err) => console.log(err));

		firebase
			.firestore()
			.collection('scores')
			.doc('all')
			.get()
			.then((res) => {
				layoutDispatch({
					type: consts.SAVE_ALL_SCORES,
					allScores: res.data(),
				});
			})
			.catch((err) => console.log(err));
	}, []);*/

	return (
		<React.Fragment>
            <BrowserRouter>
			<Switch>
				<Route
					exact
					path="/"
					component={(props) => (
						<Cover {...props} layoutDispatch={layoutDispatch} />
					)}
				/>
                <Route
					exact
					path="/find"
					component={(props) => (
						<Image
							currentImage={
								layoutState[
									layoutState.images[
										layoutState.currentImageIndex
									].string
								]
							}
							currentClickPercentage={
								layoutState.currentClickPercentage
							}
							clicksArray={layoutState.clicksArray}
							isSelectCharacterShown={
								layoutState.isSelectCharacterShown
							}
							currentClickCoords={layoutState.currentClickCoords}
                            currentScale={layoutState.currentScale}
                            currentPositionX={layoutState.currentPositionX}
                            currentPositionY={layoutState.currentPositionY}
							layoutDispatch={layoutDispatch}
						/>
					)}
				/>
			</Switch>
            </BrowserRouter>
			<GlobalStyle />
		</React.Fragment>
	);
}

export default App;
