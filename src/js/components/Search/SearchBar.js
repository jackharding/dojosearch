import React, { useEffect, useState, useRef } from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import queryString from 'query-string';
import { useAction, useStore } from 'easy-peasy';

const SearchBar = ({ history, mini }) => {
	const $input = useRef(null);

	const search = useStore(state => state.search.params);
	const updateSearch = useAction(dispatch => dispatch.search.update);

	const [address, setAddress] = useState(search.formatted_address || '');
	const [selected, setSelected] = useState(null);

	useEffect(() => {
		if(selected && selected.length) {
			let searchState = {
				formatted_address: selected[0].formatted_address,
				location: {
					lat: selected[0].geometry.location.lat(),
					lng: selected[0].geometry.location.lng(),
				},
				bounds: selected[0].geometry.bounds,
			}

			updateSearch(searchState);

			history.push({
				// TODO: QUery strings?
				// pathname: `/search?s=${searchState.formatted_address.replace(/, /g, ',')}`,
				pathname: `/search`,
				state: {
					search: searchState
				}
			});
		}
	}, [selected]);

	const handleChange = address => {
		setAddress(address);
	}

	const handleSelect = async address => {
		const selected = await geocodeByAddress(address);
		
		setSelected(selected);
	}
	
	const handleSuggestionClick = address => {
		$input.current.blur();

		handleChange(address);
		handleSelect(address);
	}

	return(
		<PlacesAutocomplete
			value={address}
			onChange={handleChange}
			onSelect={handleSelect}
		>
			{({ getInputProps, suggestions, getSuggestionItemProps }) => (
				<SearchWrap
					mini={mini}
				>
					<Input
						{ ...getInputProps({
							placeholder: 'Search Places ...',
							className: 'location-search-input'
						}) }
						ref={$input}
					/>
					<SuggestionsContainer>
						{ suggestions.map(suggestion => {									
							return (
								<Suggestion 
									{...getSuggestionItemProps(suggestion)}
									onClick={() => {
										handleSuggestionClick(suggestion.description);
									}}
								>
									<span>{suggestion.description}</span>
								</Suggestion>
							)
						}) }
					</SuggestionsContainer>
				</SearchWrap>
			)}
		</PlacesAutocomplete>
	);
}

const SuggestionsContainer = styled.div`
	position: absolute;
	padding: 4px 0;
	background: #fafafa;
	z-index: 999;
`;

const Suggestion = styled.div`
	padding: 8px 12px;
	cursor: pointer;
	background: ${({ active }) => active ? '#fafafa' : '#ffffff'};
`;

const SearchWrap = styled.div`
	width: ${({ mini }) => mini ? '225px' : '350px'};
	max-width: 100%;
	margin: ${({ mini }) => mini ? '0' : '0 auto'};
`;

const Input = styled.input`
	padding-right: 30px;
	background-image: url('/images/icon-search.svg');
	background-position: center right 10px;
	background-repeat: no-repeat;
	background-size: 15px;
`;

export default withRouter(SearchBar);