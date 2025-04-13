import React from 'react'

import HRSVG from '../assets/stat-block-header-bar.svg?react'

const FancyHR: React.FC = () => (
    <HRSVG style={{ width: '100%', height: '8px', fill: 'var(--accentColour)' }} />
)

export default FancyHR
