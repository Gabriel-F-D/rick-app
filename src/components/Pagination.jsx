import React from 'react'

const Pagination = ({ prev, next, onPrev, onNext}) => {
    
    const handlePrev = () => {
        onPrev();
    }
    const handleNext = () => {
        onNext();
    }
    
    return (
        <div>
            {prev? (
                <button onClick={handlePrev}>Previous</button>
            ) : null}
            {next? (
                <button onClick={handleNext}>Next</button>
            ) : null}
        </div>
    )
}

export default Pagination
