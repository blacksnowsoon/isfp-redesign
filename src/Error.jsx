import React from 'react'
import { useRouteError } from 'react-router-dom'

export const Error = () => {
	const error = useRouteError()
	return (
			<div id="error-page">
				<h1>Error!</h1>
				<p>Sorry, an unexpected error has occurred.</p>
				<p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
    )
}
