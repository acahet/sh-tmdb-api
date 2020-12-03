import { gql } from '@apollo/client';

export const FETCH_SERIE_BY_ID = gql`
	query tv($id: ID!) {
		tv(id: $id) {
			id
			name
			overview
			status
			seasons {
				id
				name
				overview
				poster {
					medium
					huge
					large
				}
				videos {
					id
					name
					key
					site
				}
			}

			poster {
				huge
				small
				medium
				large
			}
		}
	}
`;

export const FETCH_POPULAR_SERIES = gql`
	{
		popularTV {
			id
			name
			status
			seasonCount
			votes
			popularity
			backdrop {
				medium
			}
			genres {
				id
			}
		}
	}
`;

export const FETCH_TV_GENRES = gql`
	{
		tvGenres {
			id
			name
		}
	}
`;
