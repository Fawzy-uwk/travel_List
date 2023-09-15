function Footer({numItems,packedItems,percentage}) {
    return (
        <footer>
            You have {numItems} items on your list,and you already packed {packedItems} ({isNaN(percentage)?"0":percentage})%
        </footer>
    )
}

export default Footer
