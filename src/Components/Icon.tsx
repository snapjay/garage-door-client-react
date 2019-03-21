import React from 'react'

type Props = {
    name: string
    prefix?: string
    className?: string
}

class Icon extends React.Component<Props> {
    render() {
        return (
            <i className={`fas fa-${this.props.name} ${this.props.className}`}> </i>
        )
    }
}

export default Icon
