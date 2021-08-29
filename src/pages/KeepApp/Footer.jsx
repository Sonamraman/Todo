import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer class="blockquote-footer">
            <p>copyright © {year}</p>
        </footer>
    )
}

export default Footer
