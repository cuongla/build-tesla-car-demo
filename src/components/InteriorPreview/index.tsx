import React, { FC } from 'react'
import './InteriorPreview.css';

interface InteriorPreviewProps {
    interior?: {
        label: string
        value: string
    } | null
}

const InteriorPreview: FC<InteriorPreviewProps> = ({ interior = null }) => {
    return (
        <div className="interior-preview">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs />
          <image
            // @ts-ignore
            title={interior?.label}
            width="100%"
            height="100%"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xlinkHref={`${process.env.PUBLIC_URL}/interiors/${interior?.value}.jpeg`}
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
      </div>
    )
}

export default InteriorPreview;
