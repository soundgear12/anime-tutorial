import React from "react";

const ResetButton = ({ onClick }) => {
    return (
        <i
            className="reset-button"
            onClick={onClick}
            title="Reset Database"
        >
            <span>Reset Database</span>
        </i>
    )
}

export default ResetButton