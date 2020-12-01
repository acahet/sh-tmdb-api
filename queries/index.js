import { gql } from '@apollo/client';

export const FETCH_SERIE_BY_ID = gql`
	query tv($id: [ID!]) {
		shows(ids: $id) {
			id
			name
			overview
			status
			poster {
				huge
			}
		}
	}
`;

export const SERIES = gql`
	{
		popularTV {
			id
			name
			overview
			status
			backdrop {
				medium
			}
			genres {
				id
			}
		}
	}
`;

export const TV_GENRES = gql`
	{
		tvGenres {
			id
			name
		}
	}
`;
