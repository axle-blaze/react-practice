import React from 'react'
import { useState } from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

function RatingComponent({ initialValue = 0, onChange }) {
    const [rating, setRating] = useState(initialValue)
    const [hoverRating, setHoverRating] = useState(0)

    const handleClick = (value) => {
        setRating(value)
        onChange && onChange(value)
    }

    const handleMouseEnter = (value) => {
        setHoverRating(value)
    }

    const handleMouseLeave = () => {
        setHoverRating(0)
    }

    const getStarIcon = (starIndex) => {
        const currentRating = hoverRating || rating
        
        if (starIndex <= currentRating) {
            return <StarIcon />
        } else if (starIndex - 0.5 <= currentRating) {
            return <StarHalfIcon />
        } else {
            return <StarBorderIcon />
        }
    }

    const arr = [1, 2, 3, 4, 5]

    return (
        <div>
            <div style={{ display: 'flex', cursor: 'pointer' }}>
                {arr.map((star) => (
                    <span
                        key={star}
                        onClick={() => handleClick(star)}
                        onMouseEnter={() => handleMouseEnter(star)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {getStarIcon(star)}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default RatingComponent