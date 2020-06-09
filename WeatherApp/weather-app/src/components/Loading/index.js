import React from "react"
import PropTypes from "prop-types";

const Loading = ({caption, animated}) => {
	return(
		<div className={(animated)?("loadingContainer animated"):("loadingContainer")}>
			<span>{caption}</span>
		</div>
	)

}

Loading.propTypes = {
	animated: PropTypes.bool,
	caption: PropTypes.string
}

export default Loading;